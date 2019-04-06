
import React, { Component } from 'react'
import BackGroundWrapper    from '../components/backGroundWrapper.js'
import Header               from '../components/header.js'
import ConnectedNode        from '../containers/workout.js'
import data                 from '../sample.json'

import {
  ScrollView
} from 'react-native'

export default class WorkoutScreen extends Component {
  componentDidMount() {
    fetch('https://swole.herokuapp.com/api/user/test')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
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
        <ConnectedNode
          type={exercise.exerciseName}
          id={exercise.id}
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
