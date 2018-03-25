import {
    FETCH_CONTAINERS_BEGIN,
    FETCH_CONTAINERS_SUCCESS,
    FETCH_CONTAINERS_FAILURE
  } from '../actions/containerActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function containerReducer(state = initialState, action) {
    console.log("container reducer started...");
    switch(action.type) {
      case FETCH_CONTAINERS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_CONTAINERS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.containers
        };
  
      case FETCH_CONTAINERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }