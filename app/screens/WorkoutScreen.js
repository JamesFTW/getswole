
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View,
  Platform
} from 'react-native'

import BackGroundWrapper from '../components/backGroundWrapper.js'
import Header            from '../components/header.js'
import Navbar            from '../components/navBar.js'
import ConnectedNode     from '../containers/workout.js'
import data              from '../sample.json'
import store             from '../store/store.js'

export default class WorkoutScreen extends Component {
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
          weight={0}
        />
      )
    })

    return (
      <BackGroundWrapper>
        <Header workoutName="Leg Day"/>
        <ScrollView style={{marginBottom: 70}}>
          {WOD}
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}
