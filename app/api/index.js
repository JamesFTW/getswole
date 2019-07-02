
import { AsyncStorage } from 'react-native'
import { API_ENDPOINT } from './endpoint'
import { request }      from './request'

const APPLICATION_JSON = 'application/json'
const GET = 'Get'

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

const getUser = twitterId => {
  const data = {
    id: twitterId
  }

  return new Promise((resolve, reject) => {
    const id = twitterId.toString()

    AsyncStorage.getItem(id)
      .then(user => {
        if (user) {
          const data = JSON.parse(user)

          return resolve(data)
        }
      })
    request({
      endpoint: `${API_ENDPOINT}/user/find`,
      body: JSON.stringify(data),
      headers: APPLICATION_JSON
    })
      .then(res => res.json())
      .then(data => {
        const userData = JSON.stringify(data)
        const userId = JSON.stringify(data.userid)

        //Right now data is only profilePhoto, username, and userid
        AsyncStorage.setItem(userId, userData)
        AsyncStorage.setItem("userId", userId)

        resolve(data)
      })
      .catch(err => reject(err))
  })
}

const getUserWorkoutPlan = () => {
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/userworkoutplan/find`,
      method: GET
    })
      .then(res => res.json())
      .then(res => {
        const data = JSON.parse(res)
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

const getUserSession = () => {
  return new Promise((resolve, reject) => {
    request({
      endpoint: `${API_ENDPOINT}/user`,
      method: 'GET'
    })
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })
}

const registerUser = (username, profilePhoto) => {
  const data = {
    username,
    profilePhoto
  }

  return new Promise((resolve, reject) => {
    request({ 
      endpoint: `${API_ENDPOINT}/user/create`, 
      body: JSON.stringify(data), 
      headers: APPLICATION_JSON
    })
      .then(res => res.json())
      .then(data => {
        const userData = JSON.stringify(data)
        const userId = JSON.stringify(data.userid)

        AsyncStorage.setItem(userId, userData)
        AsyncStorage.setItem('userid', userId)

        resolve(data)
      })
      .catch(err => reject(err))
  })
}

const getUserFromCache = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userId')
      .then(data => {
        if (data) {
          AsyncStorage.getItem(data)
            .then(res => {
              const data = JSON.parse(res)
              resolve(data)
            })
        } else {
          reject(data)
        }
      })
      .catch(err => reject(err))
  })
}

const registerUserWorkout = (planId, length, timeStamp) => {
  return AsyncStorage.getItem('userId')
    .then(userData => {
      const userId =  userData.replace(/"/g, "")
      const data = {
        userId,
        planId,
        length,
        timeStamp
      }

      return new Promise((resolve, reject) => {
        request({
          endpoint: `${API_ENDPOINT}/userworkoutplan/create/`,
          body: JSON.stringify(data),
          headers: APPLICATION_JSON
        })
          .then(data => resolve(data))
          .catch(err => reject(err))
      })
    })
}

module.exports = { 
  getWorkoutSelections, 
  getUser, 
  registerUser,
  getUserSession,
  getUserFromCache,
  registerUserWorkout,
  getUserWorkoutPlan
}