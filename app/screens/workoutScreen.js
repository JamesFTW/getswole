
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { Redirect }           from "react-router-native"
import Workout                from '../components/workout.js'
import BackGroundWrapper      from '../components/backGroundWrapper.js'
import Header                 from '../components/header.js'
import StatsScreen            from './statsScreen.js'
import data                   from '../sample.json'
import { getUserWorkoutPlan } from '../api'

import {
  ScrollView
} from 'react-native'

/**
 * Move all workoutscreen switch stuff here.
 * Make switch just something to choose between screens
 */

class WorkoutScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: data.exercises,
      workoutName: data.workout,
      redirectToSelectWorkout: false,
      isLoading: true
    }
  }

  async componentDidMount() {
    try {
      let res = await getUserWorkoutPlan()

      res.status === 200 ?
        this.setState({ isLoading:false }) :
        this.setState({ redirectToSelectWorkout: true})

    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { workoutSelected } = this.props
    const {
      workouts,
      redirectToSelectWorkout,
      isLoading
    } = this.state

    if ( redirectToSelectWorkout ) {
      return <Redirect to='/WorkoutSelect'/>
    }

    if ( isLoading ) {
      return <BackGroundWrapper/>
    }

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

    const middleContent = workoutSelected ? WOD : <StatsScreen/>
    const workoutName = workoutSelected ? "Leg Day" : "Exercise Stats"

    return (     
      <BackGroundWrapper>
        <Header
          workoutName={workoutName}
          workoutDate="Today's Workout"
        />
        <ScrollView style={{marginBottom: 50}}>
          { middleContent }
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}

const mapStateToProps = state => {
  return state.workoutHeaderReducer
}

const ConnectedNode = connect(mapStateToProps)(WorkoutScreen)
export default ConnectedNode
