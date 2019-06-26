
import {
  INCREMENT,
  DECREMENT,
  FETCH_DATA
} from '../actions'

let initialState = {}

const fetchActionHandler = (state = {}, action) => {
  switch(action.type) {
    case FETCH_DATA:
      if (action.data) {
        initialState['workoutName'] = action.data.workout

        action.data.exercises.map(exercise => {
          initialState[exercise.exerciseid] = exercise
        })
      }
      return initialState
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
    default:
      return state
  }
}

export default (state = initialState, action) => {
  const { nodeId, data } = action

  if (data === undefined && nodeId === undefined) {
    return state
  }

  if (nodeId === undefined) {
    return fetchActionHandler(state, action)
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}
