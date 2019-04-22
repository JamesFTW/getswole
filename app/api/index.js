
import { AsyncStorage } from 'react-native'
import { API_ENDPOINT } from './endpoint'
import { request }      from './request'

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

    request({ 
      endpoint: `${API_ENDPOINT}/workout`,
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        const workoutData = JSON.stringify(data)
        
        AsyncStorage.setItem(data.planid, workoutData)
        
        return resolve(data)
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

const registerUser = (username, profilePhoto) => {
  const body = {
    username,
    profilePhoto
  }

  return new Promise((resolve, reject) => {
    request({ 
      endpoint: `${API_ENDPOINT}/user/create`, 
      body: JSON.stringify(body), 
      headers: 'application/ json'
    })
    .then(res => res.json())
    .then(res => {
      resolve(res)
    })
    .catch(err => resolve(err))
  })
}

module.exports = { getWorkoutSelections, isUser }