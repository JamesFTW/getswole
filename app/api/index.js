
import { AsyncStorage } from 'react-native'
import { API_ENDPOINT } from './endpoint'

//This works for a single workout, but going to have to eventually
//fix for an array of workouts

const getWorkoutSelections = workoutID => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(workoutID)
      .then(item => {
        if(item) {
          const data = JSON.parse(item)

          return resolve(data)
        }
      })
      //change api endpoint to something more descriptive
    fetch(`${API_ENDPOINT}/workout`)
      .then(res => res.json())
      .then(data => {
        const workoutData = JSON.stringify(data)
        
        AsyncStorage.setItem(data.planid, workoutData)
        
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

const isUser = () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_ENDPOINT}/user/isuser`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          // sign in
        } else {
          // redirect to onBoardingScreen
        }
      })
  })
}

export default { getWorkoutSelections, isUser }