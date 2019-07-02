
import React, { Component }  from 'react'
import { connect }           from 'react-redux'
import { Redirect }          from "react-router-native"
import * as actions          from '../actions'
import Workout               from '../components/workout.js'
import BackGroundWrapper     from '../components/backGroundWrapper.js'
import Header                from '../components/header.js'
import SwipeComponent        from '../components/swipeComponent.js'
import StatsScreen           from './statsScreen.js'
import { title, isEmptyObj } from '../../util'

import {
  ScrollView
} from 'react-native'

class WorkoutScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToSelectWorkout: false,
      isLoading: true,
      workouts: []
    }
  }

  componentDidMount() {
    const {
      fetchWorkouts,
      weightCounter
    } = this.props

    isEmptyObj(weightCounter) ?
      fetchWorkouts() :
      this.setWorkouts(weightCounter)
    
    this.setState({isLoading: false})

    /**
     * IF no workouts are returned redirect to select
     * workout
     */
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== undefined) {
      const { weightCounter } = nextProps
      this.setWorkouts(weightCounter)
    }
  }

  setWorkouts = props => {
    let workoutState = []

    for (var key in props) {
      if (
        !isEmptyObj(props[key]) &&
        typeof props[key] !== 'string'
      ) {
        workoutState.push(props[key])
      }
    }
    this.setState({
      workouts: workoutState,
      isLoading: false
    })
  }

  getData = data => {
    const { toggleCompletedWorkout } = this.props

    this.setState({
      completedExerciseId: data
    }, () => toggleCompletedWorkout(data)) 
  }

  render() {
    const {
      redirectToSelectWorkout,
      isLoading,
      workouts,
      completedExerciseId
    } = this.state

    const {
      workoutHeaderReducer: workoutSelected,
      weightCounter
    } = this.props

    const WorkoutName = weightCounter.workoutName ?
      title(weightCounter.workoutName) :
      null

    if (redirectToSelectWorkout) {
      return <Redirect to='/WorkoutSelect'/>
    }

    if (isLoading) {
      return <BackGroundWrapper/>
    }

    if (workouts) {
      WOD = workouts.map((exercise, i) => {
        if (!isEmptyObj(exercise)) {
          const { name, exerciseid} = exercise
          const workoutTitle = title(name)

          if (exerciseid !== completedExerciseId) {
            return (
              <SwipeComponent
                getData={this.getData}
                key={i}
              >
                <Workout
                  type={workoutTitle}
                  id={exercise.exerciseid}
                  styleid={i}
                  sets={exercise.sets}
                  rep={exercise.reps}
                  weight={exercise.suggestedweight}
                  key={i}
                />
              </SwipeComponent>
            )
          } else {
            return null
          }  
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
