
import { TOGGLE_FOLLOW } from '../actions'

const initialState = {
  isFollowing: false
}

const node = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      return {
        isFollowing: !state.isFollowing
      }
    default:
      return state
  }
}

export default (state = initialState, action) => {
  const { type } = action

  if (type === TOGGLE_FOLLOW) {
    return {
      isFollowing: node(!state.isFollowing, type)
    }
  }

  return {
    ...state
  }
}
