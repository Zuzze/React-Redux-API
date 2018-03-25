export const FETCH_VESSEL_PLANS_BEGIN   = 'FETCH_VESSEL_PLANS_BEGIN';
export const FETCH_VESSEL_PLANS_SUCCESS = 'FETCH_VESSEL_PLANS_SUCCESS';
export const FETCH_VESSEL_PLANS_FAILURE = 'FETCH_VESSEL_PLANS_FAILURE';
export const ADD_VESSEL_PLAN_BEGIN = 'ADD_VESSEL_PLAN_BEGIN';
export const ADD_VESSEL_PLAN_SUCCESS = 'ADD_VESSEL_PLAN_SUCCESS';
export const ADD_VESSEL_PLAN_FAILURE = 'ADD_VESSEL_PLAN_FAILURE';

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

export const addVesselPlanBegin = () => ({
    type: ADD_VESSEL_PLAN_BEGIN
});

export const addVesselPlanSuccess = plan => ({
    type: ADD_VESSEL_PLAN_SUCCESS,
    payload: plan
});

export const addVesselPlanFailure = error => ({
    type: ADD_VESSEL_PLAN_FAILURE,
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

export function addVesselPlan(vesselId, containerId) {
    console.log("assigning container to vessel...")
    fetch('http://127.0.0.1:8000/vessel_plans', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        vessel_id: vesselId,
        container_ids: [containerId],
        })
    })

   return dispatch => {
    dispatch({
      type: ADD_VESSEL_PLAN_SUCCESS
    })
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