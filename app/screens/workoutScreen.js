
import React, { Component }  from 'react'
import { connect }           from 'react-redux'
import { Redirect }          from "react-router-native"
import * as actions          from '../actions'
import Workout               from '../components/workout.js'
import CompletedWorkoutCard  from '../components/completedWorkoutCard.js'
import BackGroundWrapper     from '../components/backGroundWrapper.js'
import Header                from '../components/header.js'
import SwipeComponent        from '../components/swipeComponent.js'
import StatsScreen           from './statsScreen.js'
import { title, isEmptyObj } from '../../util'
import { getUserFromCache }  from '../api'

import {
  ScrollView
} from 'react-native'

let scrollStyle = null

class WorkoutScreen extends Component {
  constructor(props) {
    completedExercises = []
    super(props)
    this.state = {
      redirectToSelectWorkout: false,
      isLoading: true,
      workouts: [],
      completedExerciseId: '',
      userid: ''
    }
  }

  async componentDidMount() {
    const {
      fetchWorkouts,
      weightCounter
    } = this.props

    const user = await getUserFromCache()
    this.setState({ userid: user.userid })
    //This user setState makes transition from any screen to workout flicker

    isEmptyObj(weightCounter) ?
      fetchWorkouts() :
      this.setWorkouts(weightCounter)
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
    const {
      toggleCompletedWorkout,
      updateCompletedWorkoutState
    } = this.props

    this.setState({
      completedExerciseId: data
    }, () => {
        const workout = completedExercises.pop()

        updateCompletedWorkoutState(workout)
        toggleCompletedWorkout(data)
    }) 
  }

  render() {
    const {
      redirectToSelectWorkout,
      isLoading,
      workouts,
      completedExerciseId,
      userid
    } = this.state

    const {
      workoutHeaderReducer: workoutSelected,
      weightCounter,
      completedWorkoutReducer
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

    if (workouts.length > 0) {
      WOD = workouts.map((exercise, i) => {
        if (!isEmptyObj(exercise)) {
          const { name, exerciseid } = exercise
          const exerciseTitle = title(name)

          if (exerciseid !== completedExerciseId) {
            return (
              <SwipeComponent
                getData={this.getData}
                key={i}
              >
                <Workout
                  exerciseName={exerciseTitle}
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
            const completeWorkout = {}
            completeWorkout['userid'] = userid
            completeWorkout['exerciseid'] = exercise.exerciseid
            completeWorkout['weightused'] = exercise.suggestedweight
            completeWorkout['createdAt'] = new Date()
            completeWorkout['exercise'] = exerciseTitle

            completedExercises.push(completeWorkout)
          }  
        }
      })
    } else {
      WOD = null
    }

    if (workouts.length === 0) {
      scrollStyle = { 
        flexGrow: 1, 
        justifyContent: 'center', 
        marginBottom: 30 
      }
      WOD = (
        <CompletedWorkoutCard 
          workoutName={WorkoutName} 
          exercises={completedWorkoutReducer} 
        />
      )
    } 

    let middleContent = workoutSelected.workoutSelected ? WOD : <StatsScreen/>
    let workoutName = workoutSelected.workoutSelected ? WorkoutName : "Exercise Stats"

    if(workouts.length === 0) {
      workoutName = 'Completed Workout'
    }

    return (     
      <BackGroundWrapper>
        <Header
          workoutName={workoutName}
          workoutDate="Today's Workout"
        />
        <ScrollView 
          contentContainerStyle={scrollStyle}
          style={{
            flex: 1,
            flexDirection: 'column',
            marginBottom: 50}}>
          { middleContent }
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}

const mapStateToProps = state => {
  const {
    workoutHeaderReducer,
    weightCounter,
    completedWorkoutReducer
  }  = state

  return {
    workoutHeaderReducer,
    weightCounter,
    completedWorkoutReducer
  }
}

const ConnectedNode = connect(mapStateToProps, actions)(WorkoutScreen)
export default ConnectedNode
