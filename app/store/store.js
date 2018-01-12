import { createStore } from 'redux'

export const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const workoutCount = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT':
      return [
        ...state,
        counter(undefined, action)
      ]
    case 'DECREMENT':
      return [
        ...state,
        counter(undefined, action)
      ]
    default:
      return state
  }
}

let store = createStore(counter);

export default store;
