export const FETCH_VESSELS_BEGIN   = 'FETCH_VESSELS_BEGIN';
export const FETCH_VESSELS_SUCCESS = 'FETCH_VESSELS_SUCCESS';
export const FETCH_VESSELS_FAILURE = 'FETCH_VESSELS_FAILURE';

export const fetchVesselsBegin = () => ({
  type: FETCH_VESSELS_BEGIN
});

export const fetchVesselsSuccess = vessels => ({
  type: FETCH_VESSELS_SUCCESS,
  payload: { vessels }
});

export const fetchVesselsFailure = error => ({
  type: FETCH_VESSELS_FAILURE,
  payload: { error }
});

export function fetchVessels() {
  return dispatch => {
    dispatch(fetchVesselsBegin());
    return fetch('http://127.0.0.1:8000/vessels')
    .then(handleErrors)
    .then(results => { results.json()
    .then(json => {
      console.log(json);
      dispatch(fetchVesselsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchVesselsFailure(error)));
    });
}
}
  /*
    fetch('http://127.0.0.1:8000/vessels')
    .then((res) => { res.json() })
    .then((data) => { 
        console.log(data);
        return data;
   })

   return dispatch => {
    dispatch({
      type: FETCH_VESSELS_BEGIN
    })
  }
}
  /*console.log("calling API...");
    return dispatch => {
      dispatch(fetchVesselsBegin());
      return fetch('http://127.0.0.1:8000/vessels')
      .then(handleErrors)
      .then(results => { results.json()
      .then(json => {
        console.log(json);
        dispatch(fetchVesselsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchVesselsFailure(error)));
      });
  }
}*/


export function fetchContainers() {
  return dispatch => {
    dispatch(fetchVesselsBegin());
    return fetch("/products")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchVesselsSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchVesselsFailure(error)));
  };
}

export function fetchVesselPlans() {
  return dispatch => {
    dispatch(fetchVesselsBegin());
    return fetch("/products")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchVesselsSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchVesselsFailure(error)));
  };
}

export function postVesselPlans() {
  return dispatch => {
    dispatch(fetchVesselsBegin());
    return fetch("/products")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch(fetchVesselsSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchVesselsFailure(error)));
  };
}

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    console.log("error while fetching data");
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }