import { UPDATEWORKOUT } from '../actions'

const node = (state = [], action) => {
  switch(action.type) {
    case UPDATEWORKOUT:
      return [
        ...state,
        action.workout
      ]
    default:
      return state
  }
}

export default (state = [], action) => {
  return node(state, action)
}