import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
//import './vessels'

//combines all reducers of app
export default combineReducers({
  routing: routerReducer,
  counter
})
