
import React, { Component } from 'react'
import Workout              from '../components/workout.js'
import data                 from '../sample.json'

import {
  ScrollView
} from 'react-native'

export default class WorkoutContainer extends Component {
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
      <ScrollView style={{marginBottom: 50}}>
        { WOD }
      </ScrollView>
    )
  }
}
