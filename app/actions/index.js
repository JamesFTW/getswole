
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
export const TOGGLE_HEADER_WORKOUT = 'TOOGLE_HEADER_WORKOUT'
export const TOGGLE_HEADER_STATS = 'TOOGLE_HEADER_STATS'

export const increment = nodeId => ({
  type: INCREMENT,
  nodeId
})

export const decrement = nodeId => ({
  type: DECREMENT,
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

