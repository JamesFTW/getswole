import { combineReducers }     from 'redux'
import weightCounter           from './weightCounter.js'
import followReducer           from './followReducer.js'
import workoutHeaderReducer    from './workoutHeaderReducer'
import completedWorkoutReducer from './completedWorkoutReducer'

export const rootReducer = combineReducers({
  weightCounter,
  followReducer,
  workoutHeaderReducer,
  completedWorkoutReducer
})