
import { getUserWorkoutPlan } from '../api'

export const INCREMENT             = 'INCREMENT'
export const DECREMENT             = 'DECREMENT'
export const TOGGLE_FOLLOW         = 'TOGGLE_FOLLOW'
export const TOGGLE_HEADER_WORKOUT = 'TOOGLE_HEADER_WORKOUT'
export const TOGGLE_HEADER_STATS   = 'TOOGLE_HEADER_STATS'
export const FETCH_DATA            = 'FETCH_DATA'
export const COMPLETE              = 'COMPLETE'
export const UPDATEWORKOUT         = 'UPDATEWORKOUT'
export const INCREMENTBY10         = 'INCREMENTBY10'
export const DECREMENTBY10         = 'DECREMENTBY10'

export const increment = nodeId => ({
  type: INCREMENT,
  nodeId
})

export const decrement = nodeId => ({
  type: DECREMENT,
  nodeId
})

export const incrementBy10 = nodeId => ({
  type: INCREMENTBY10,
  nodeId
})

export const decrementBy10 = nodeId => ({
  type: DECREMENTBY10,
  nodeId
})

export const toggleFollow = () => ({
  type: TOGGLE_FOLLOW
})

export const toggleHeaderWorkout = () => ({
  type: TOGGLE_HEADER_WORKOUT
})

export const toggleHeaderStats = () => ({
  type: TOGGLE_HEADER_STATS
})

export const fetchData = data => ({
  type: FETCH_DATA,
  data  
})

export const toggleCompletedWorkout = workoutid => ({
  type: COMPLETE,
  workoutid
})

export const updateCompletedWorkoutState = workout => ({
  type: UPDATEWORKOUT,
  workout
})

export const fetchWorkouts = () => {
  return (dispatch) => {
    return getUserWorkoutPlan()
      .then(res => dispatch(fetchData(res)))
      .catch(err => console.log(err))
  }
}
