
import data from '../sample.json'
import {
  INCREMENT,
  DECREMENT
} from '../actions'

let obj = {}

const workout = data.exercises

workout.map((exercises) => {
  obj[exercises.id] = exercises
})

const node = (state = {}, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        weight: state.weight + 1
      }
    case DECREMENT:
      return {
        ...state,
        weight: state.weight - 1
      }
    default:
      return state
  }
}

export default (state = obj, action) => {
  const { nodeId } = action
  
  if (typeof nodeId === 'undefined') {
    return state
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}
