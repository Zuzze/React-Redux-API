import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import vesselReducer from './vesselReducer';
import containerReducer from './containerReducer';
import vesselPlanReducer from './vesselPlanReducer';

//combines all reducers of app
export default combineReducers({
    routing: routerReducer,
    vessels: vesselReducer,
    containers: containerReducer,
    vesselPlans: vesselPlanReducer
})
