
import React, { Component }  from 'react'
import { connect }           from 'react-redux'
import { Redirect }          from "react-router-native"
import * as actions          from '../actions'
import Workout               from '../components/workout.js'
import BackGroundWrapper     from '../components/backGroundWrapper.js'
import Header                from '../components/header.js'
import StatsScreen           from './statsScreen.js'
import { title, isEmptyObj } from '../api/util'

import {
  ScrollView
} from 'react-native'

class WorkoutScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToSelectWorkout: false,
      isLoading: true
    }
  }

  componentDidMount() {
    const { fetchWorkouts } = this.props
    fetchWorkouts()
    /**
     * IF no workouts are returned redirect to select
     * workout
     */
    this.setState({ isLoading: false })
  }

  render() {
    const {
      redirectToSelectWorkout,
      isLoading
    } = this.state

    const {
      workoutHeaderReducer: workoutSelected,
      weightCounter
    } = this.props

    let workouts = []

    const WorkoutName = weightCounter.workoutName ?
      title(weightCounter.workoutName) :
      null

    for (let key in weightCounter) {
      if (key !== 'workoutName') {
        workouts.push(weightCounter[key])
      }
    }

    if (redirectToSelectWorkout) {
      return <Redirect to='/WorkoutSelect'/>
    }

    if (isLoading) {
      return <BackGroundWrapper/>
    }

    if (workouts) {
      WOD = workouts.map((exercise, i) => {
        if (!isEmptyObj(exercise)) {
          const workoutTitle = title(exercise.name)
          return (
            <Workout
              type={workoutTitle}
              id={exercise.exerciseid}
              styleid={i}
              sets={exercise.sets}
              rep={exercise.reps}
              weight={exercise.suggestedweight}
              key={i + 1}
            />
          )
        }
      })
    } else {
      WOD = null
    }

    const middleContent = workoutSelected.workoutSelected ? WOD : <StatsScreen/>
    const workoutName = workoutSelected.workoutSelected ? WorkoutName : "Exercise Stats"

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
  const { workoutHeaderReducer, weightCounter }  = state

  return {
    workoutHeaderReducer,
    weightCounter
  }
}

const ConnectedNode = connect(mapStateToProps, actions)(WorkoutScreen)
export default ConnectedNode
