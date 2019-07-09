
import {
  INCREMENT,
  DECREMENT,
  INCREMENTBY10,
  DECREMENTBY10,
  FETCH_DATA,
  COMPLETE
} from '../actions'
import { isEmptyObj } from '../../util'
let initialState = {}

const filterState = (workoutid, state) =>
  Object.keys(state).reduce((accumulator, key) => (
    state[key].exerciseid === workoutid ? accumulator : {
      ...accumulator,
      [key]: state[key]
    }
  ), {})

const fetchActionHandler = (state = {}, action) => {
  switch(action.type) {
    case FETCH_DATA:
      if (action.data) {
        initialState['workoutName'] = action.data.workout

        action.data.exercises.map(exercise => {
          initialState[exercise.exerciseid] = exercise
        })
      }
      return state
  }
}

const node = (state = {}, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        suggestedweight: state.suggestedweight + 1
      }
    case DECREMENT:
      return {
        ...state,
        suggestedweight: state.suggestedweight - 1
      }
    case INCREMENTBY10:
      return {
        ...state,
        suggestedweight: state.suggestedweight + 10
      }
    case DECREMENTBY10:
      return {
        ...state,
        suggestedweight: state.suggestedweight - 10
      }
    case COMPLETE:
      return state
    default:
      return state
  }
}

export default (state = initialState, action) => {
  const { nodeId, data, workoutid } = action

  if (workoutid !== undefined) {
    return filterState(workoutid, state)
  }
  
  if (data === undefined && nodeId === undefined) {
    return state
  }

  if (nodeId === undefined && isEmptyObj(state)) {
    return fetchActionHandler(state, action)
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}
