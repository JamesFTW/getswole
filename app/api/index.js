
import { AsyncStorage } from 'react-native'

//This works for a single workout, but going to have to eventually
//fix for an array of workouts

const getWorkoutSelections = workoutID => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(workoutID)
      .then(item => {
        if(item) {
          return resolve(JSON.parse(item))
        }
      })
      //change api endpoint to something more descriptive
    fetch(`https://swole.herokuapp.com/api/workout`)
      .then(res => res.json())
      .then(data => {
        AsyncStorage.setItem(data.planid, JSON.stringify(data))
        
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

export default getWorkoutSelections