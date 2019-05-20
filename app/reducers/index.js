import { combineReducers } from 'redux'
import weightCounter from './weightCounter.js'
import followReducer from './followReducer.js'
import workoutHeaderReducer from './workoutHeaderReducer'

export const rootReducer = combineReducers({
  weightCounter,
  followReducer,
  workoutHeaderReducer
})