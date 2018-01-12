import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View
} from 'react-native';

import CompletedWorkoutDetails from '../components/CompletedWorkoutDetails.js'
import Workout                 from '../components/Workout.js'

let data = require('../../json/completedWorkouts.json')

export default class WorkoutDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: data,
      currentWorkout: '',
      currentStatus: ''
    }
  }
  componentDidMount(){
    this.state.data.workouts.map((workout,i) => {
      if(workout.statusID.toString() === this.props.match.params.id){
          this.setState({
            currentWorkout: workout.workout,
            currentStatus: workout.status
          })
        }
      })
  }
  render() {
    console.log(this.state)
    this.state.data.workouts.map((workout,i) => {
      if(workout.statusID.toString() === this.props.match.params.id){
        Details = workout.exercises.map((exercise, i) => {
          return (
            <View key={i}>
              <CompletedWorkoutDetails sets={exercise.sets} reps={exercise.reps} time_completed={exercise.time_completed} exercise={exercise.exercise} weight={exercise.weight} date_completed={exercise.date_completed} key={i}/>
            </View>
            )
          })
        }
      })

    return (
    <ScrollView style={styles.container2}>
      <View style={styles.flexheader}>
        <Text style={styles.completed}>{this.state.currentStatus}</Text>
        <Text style={styles.header}>{this.state.currentWorkout}</Text>
      </View>
      <View style={styles.flexContainer}>
        {Details}
      </View>
    </ScrollView>
      );
    }
  }


const styles = StyleSheet.create({
  flexheader:{
    backgroundColor: '#EDEDED',
    marginBottom: 30
  },
  reps:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    color: '#989898',
    textAlign: 'center'
  },
  border:{
    borderWidth: .5,
    borderColor: '#D0CECE'
  },
  weight:{
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 30
  },
  sets_rep_wrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 20,
  },
  workout_weight_wrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  date_time_wrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 10
  },
  time:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    color: '#989898',
    textAlign: 'center'
  },
  sets:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    color: '#989898',
    textAlign: 'center'
  },
  workout:{
    fontFamily: 'Helvetica-Light',
    fontSize: 24,
    letterSpacing: 1,
    marginLeft: 5,
    color: '#4F4F4F'
  },
  date:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    marginTop: 10,
    color: '#989898'
  },
  temp_details:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 15,
    marginRight: 15,
  },
  flexFooter: {
    backgroundColor: 'red'
  },
  completed:{
    textAlign: 'center',
    top: 10,
    backgroundColor: 'transparent',
    color: '#40D4BB',
    fontFamily: 'Helvetica',
    fontSize: 18
  },
  container2: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  flexContainer:{
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    marginBottom: 70
  },
  header:{
    textAlign: 'center',
    top: 11,
    fontSize: 40,
    marginLeft: 5,
    backgroundColor: 'transparent',
    fontFamily: 'HelveticaNeue-Bold',
    letterSpacing: 1,
    color: '#4F4F4F',
  }
});
