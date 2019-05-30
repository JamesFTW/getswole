
import React, { Component }          from 'react'
import CompletedWorkoutDetails       from '../components/completedWorkoutDetails.js'
import BackGroundWrapper             from '../components/backGroundWrapper.js'
import CompletedWorkoutDetailsHeader from '../components/completedWorkoutDetailsHeader.js'
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native'

let data = require('../exerciseTotal.json')

export default class ExerciseTotalsScreen extends Component {
  constructor(props) {
    super(props)
    this.workout = []
    this.state = {
      data: data,
      currentWorkout: [],
      currentStatus: '',
      isLoading: true
    }
  }

  componentDidMount() {
    //API should send data in date order
    const { data } = this.state
    const { id } = this.props.match.params
    
    for (let workid in data) {
      if (workid === id) {
        this.workout = data[workid].exercises

        this.setState({
          isLoading: false,
          currentWorkout: workid,
          currentStatus: data[workid].status
        })
      }
    }
  }


  render() {
    const {
      isLoading,
      currentWorkout
    } = this.state

    if (isLoading) {
      return <ActivityIndicator size="large" />
    }

    const exercise = this.workout.map((exercise, i) => {
      return (
        <CompletedWorkoutDetails
          set={exercise.sets}
          reps={exercise.reps}
          timeCompleted={exercise.time_completed}
          exercise={exercise.exercise}
          weight={exercise.weight}
          dateCompleted={exercise.date_completed}
          key={i.toString()}
        />
      )
    })

    return (
      <BackGroundWrapper>
        <ScrollView style={styles.scroll}>
          <CompletedWorkoutDetailsHeader
            currentWorkout={currentWorkout}
          />
          <View style={styles.flexContainer}>
            {exercise}
          </View>
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    marginBottom: 70
  },
})
