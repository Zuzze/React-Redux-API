/*import {
    SET_SELECTED_CONTAINER,
    SET_SELECTED_VESSEL,
    ADD_VESSEL_PLAN
  } from '../actions/planFormActions.js';

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
        return state;
    }
  }

export function addVesselPlan(plan){
    return {
        type: ADD_VESSEL_PLAN,
        payload: {
            vesselPlan: plan
        }
    }
}

export function postVesselPlans() {
  
}
*/