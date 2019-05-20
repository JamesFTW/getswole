import {
  TOGGLE_HEADER_WORKOUT,
  TOGGLE_HEADER_STATS
} from '../actions'

const initialState = {
  workoutSelected: true,
  statsSelected: false
}

const workoutState = {
  workoutSelected: true,
  statsSelected: false
}

const statsState = {
  workoutSelected: false,
  statsSelected: true
}

const node = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_HEADER_WORKOUT:
      return {
        ...state,
        workoutSelected: true,
        statsSelected: false
      }
    case TOGGLE_HEADER_STATS:
      return {
        ...state,
        workoutSelected: false,
        statsSelected: true
      }
    default:
      return state
  }
}

export default (state = initialState, action) => {
  const { type } = action

  if (type === TOGGLE_HEADER_WORKOUT) {
    return {
      ...node(workoutState, type)
    }
  }

  if (type === TOGGLE_HEADER_STATS) {
    return {
      ...node(statsState, type)
    }
  }

  return {
    ...state
  }
}