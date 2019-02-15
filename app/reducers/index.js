import { combineReducers } from 'redux'
import weightCounter from './weightCounter.js'
import followReducer from './followReducer.js'

export const rootReducer = combineReducers({
  weightCounter,
  followReducer
})