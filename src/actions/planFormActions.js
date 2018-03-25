/*export const SET_SELECTED_VESSEL = 'SET_SELECTED_VESSEL';
export const SET_SELECTED_CONTAINER = 'SET_SELECTED_CONTAINER';

export const setSelectedVessel = selected_vessel => ({
    type: SET_SELECTED_VESSEL,
    payload: { selected_vessel }
});

export const setSelectedContainer = selected_container => ({
    type: SET_SELECTED_CONTAINER,
    payload: { selected_container }
});

export function selectVessel(id) {
    return dispatch => {
       dispatch(setSelectedVessel(id))
    };
}

export function selectContainer(id){
    return dispatch => {
        dispatch(setSelectedContainer(id))
    };
}

  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    console.log("error while fetching data");
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }*/