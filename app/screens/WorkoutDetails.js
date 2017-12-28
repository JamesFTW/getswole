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


export default class WorkoutDetails extends Component {
  constructor(props){
    super(props)
  }
  render() {
  console.log(this.state)
    return (
    <View style={styles.container2}>
      <View style={styles.flexContainer}>

        <View style={styles.flexheader}>
          <Text style={styles.completed}>Completed</Text>
          <Text style={styles.header}>Leg Day</Text>
        </View>

        <CompletedWorkoutDetails/>
        <CompletedWorkoutDetails/>
        <CompletedWorkoutDetails/>
        <CompletedWorkoutDetails/>
        <CompletedWorkoutDetails/>
        <CompletedWorkoutDetails/>


      </View>
    </View>
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
    height: '90%'
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
