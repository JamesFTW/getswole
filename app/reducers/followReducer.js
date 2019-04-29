
import { TOGGLE_FOLLOW } from '../actions'

const node = (state = {isFollowing: false}, action) => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        isFollowing: !state.isFollowing
      }
    default:
      return state
  }
}

export default (state, action) => {
  const { type } = action

  if (type === TOGGLE_FOLLOW) {
    return {
      ...state,
      isFollowing: node(!state.isFollowing, type)
    }
  }

  return {
    ...state
  }
}
