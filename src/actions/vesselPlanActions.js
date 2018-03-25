export const FETCH_VESSEL_PLANS_BEGIN   = 'FETCH_VESSEL_PLANS_BEGIN';
export const FETCH_VESSEL_PLANS_SUCCESS = 'FETCH_VESSEL_PLANS_SUCCESS';
export const FETCH_VESSEL_PLANS_FAILURE = 'FETCH_VESSEL_PLANS_FAILURE';

export const fetchVesselPlansBegin = () => ({
  type: FETCH_VESSEL_PLANS_BEGIN
});

export const fetchVesselPlansSuccess = vessel_plans => ({
  type: FETCH_VESSEL_PLANS_SUCCESS,
  payload: { vessel_plans }
});

export const fetchVesselPlansFailure = error => ({
  type: FETCH_VESSEL_PLANS_FAILURE,
  payload: { error }
});


export function fetchVesselPlans() {
  return dispatch => {
    dispatch(fetchVesselPlansBegin());
    return fetch('http://127.0.0.1:8000/vessel_plans')
    .then(handleErrors)
    .then(results => { results.json()
    .then(json => {
      console.log(json);
      dispatch(fetchVesselPlansSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchVesselPlansFailure(error)));
    });
}
}

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    console.log("error while fetching data");
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }