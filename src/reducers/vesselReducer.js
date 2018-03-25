import {
    FETCH_VESSELS_BEGIN,
    FETCH_VESSELS_SUCCESS,
    FETCH_VESSELS_FAILURE
  } from '../actions/vesselActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function vesselReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_VESSELS_BEGIN:
        // Mark the state as "loading" so we can show a spinner, reset errors
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_VESSELS_SUCCESS:
        // replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.vessels
        };
  
      case FETCH_VESSELS_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, no items to display anymore, so set it empty.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // always have a default case in a reducer
        return state;
    }
  }