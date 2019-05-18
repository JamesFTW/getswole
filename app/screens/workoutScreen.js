
import React, { Component } from 'react'
import BackGroundWrapper    from '../components/backGroundWrapper.js'
import Header               from '../components/header.js'
import Workout              from '../containers/workout.js'
import data                 from '../sample.json'
import WorkoutSwitchHeader  from '../components/workoutSwitchHeader'

import {
  ScrollView
} from 'react-native'

export default class WorkoutScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: data.exercises,
      workoutName: data.workout
    }
  }

  tester = headerState => {
    console.log(headerState)
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
        <Header workoutName="Leg Day">
          <WorkoutSwitchHeader getHeaderState={this.tester}/>
        </Header>
        <ScrollView style={{marginBottom: 45}}>
          {WOD}
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}
