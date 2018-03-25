export const FETCH_CONTAINERS_BEGIN   = 'FETCH_CONTAINERS_BEGIN';
export const FETCH_CONTAINERS_SUCCESS = 'FETCH_CONTAINERS_SUCCESS';
export const FETCH_CONTAINERS_FAILURE = 'FETCH_CONTAINERS_FAILURE';

export const fetchContainersBegin = () => ({
  type: FETCH_CONTAINERS_BEGIN
});

export const fetchContainersSuccess = containers => ({
  type: FETCH_CONTAINERS_SUCCESS,
  payload: { containers }
});

export const fetchContainersFailure = error => ({
  type: FETCH_CONTAINERS_FAILURE,
  payload: { error }
});

export function fetchContainers() {
  return dispatch => {
    dispatch(fetchContainersBegin());
    return fetch('http://127.0.0.1:8000/containers')
    .then(handleErrors)
    .then(results => { results.json()
    .then(json => {
      console.log(json);
      dispatch(fetchContainersSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchContainersFailure(error)));
    });
}
}

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    console.log("error while fetching data");
    if (!response.ok) {
        console.log(response.statusText);
      throw Error(response.statusText);
    }
    return response;
  }