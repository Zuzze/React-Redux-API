import {
    FETCH_VESSEL_PLANS_BEGIN,
    FETCH_VESSEL_PLANS_SUCCESS,
    FETCH_VESSEL_PLANS_FAILURE,
    //SET_SELECTED_CONTAINER,
    //SET_SELECTED_VESSEL
  } from '../actions/vesselPlanActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function vesselPlanReducer(state = initialState, action) {
    console.log("vessel plan reducer started...");
    switch(action.type) {
      case FETCH_VESSEL_PLANS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_VESSEL_PLANS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.vessel_plans
        };
  
      case FETCH_VESSEL_PLANS_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

 

  /*
   const initialVessel = {
    selectedVessel: null,
  };

  export function selectedVesselReducer(state = initialVessel, action) {
    console.log("selected vessel reducer started...");
    switch(action.type) {
      case SET_SELECTED_VESSEL:
        return {
            ...state,
            selectedVessel: action.payload.selectedVessel
        };
        default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

  const initialContainer = {
    selectedVessel: null,
  };

  export function selectedContainerReducer(state = initialContainer, action) {
    console.log("selected container reducer started...");
    switch(action.type) {
        case SET_SELECTED_CONTAINER:
            return {
                ...state,
                selectedContainer: action.payload.selected_container
            }
        default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }*/