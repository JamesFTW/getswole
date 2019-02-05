
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const FOLLOW    = 'FOLLOW'
export const UNFOLLOW  = 'UNFOLLOW'

export const increment = nodeId => ({
  type: INCREMENT,
  nodeId
})

export const decrement = nodeId => ({
  type: DECREMENT,
  nodeId
})
