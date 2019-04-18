
import React, { Component } from 'react'
import BackGroundWrapper    from '../components/backGroundWrapper.js'
import Header               from '../components/header.js'
import Workout              from '../containers/workout.js'
import data                 from '../sample.json'

import {
  ScrollView
} from 'react-native'

export default class WorkoutScreen extends Component {
  // componentDidMount() {
  //   fetch('https://swole.herokuapp.com/api/workout/test', {
  //     credentials: "include"
  //   })
  //     .then(res => {
  //       const result = res._bodyText
  //       const jsonVersion = JSON.parse(result)
  //       console.log(jsonVersion)
  //     })
  //     .catch(err => console.log(err))
  // }
  constructor(props) {
    super(props)
    this.state = {
      workouts: data.exercises,
      workoutName: data.workout
    }
  }

  render() {
    const { workouts } = this.state

    const WOD = workouts.map((exercise, i) => {
      return (
        <Workout
          type={exercise.exerciseName}
          id={exercise.id}
          styleid={i}
          sets={exercise.sets}
          rep={exercise.rep}
          key={i+1}
        />
      )
    })

    return (
      <BackGroundWrapper>
        <Header workoutName="Leg Day"/>
        <ScrollView style={{marginBottom: 60}}>
          {WOD}
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}
