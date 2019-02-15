
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'

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

