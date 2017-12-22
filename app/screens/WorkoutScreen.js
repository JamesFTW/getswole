import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View
} from 'react-native';

import Workout from '../components/Workout.js'

let data = require('../../sample.json')

export default class WorkoutScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      workouts: data.exercises,
      workoutName: data.workout
      }
  }
  render() {
  console.log(this.state)
    return (
    <View style={styles.container2}>
      <View style={styles.flexContainer}>

        <View style={styles.flexHeader}>
          <ImageBackground style={styles.image} source={require('../../img/header/header.png')}>
            <Text style={styles.header}>{this.state.workoutName}</Text>
          </ImageBackground>
        </View>

        <ScrollView style={styles.flexBody}>
          {this.state.workouts.map((exercise, i) => {
            return (
              <View key={i}>
                <Workout keyId={i} id={exercise.id} type={exercise.exerciseName} weight={exercise.weight} sets={exercise.sets} rep={exercise.rep}/>
              </View>
            )
          })}
        </ScrollView>

      </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  flexBody:{
    flex: 1,
    display: 'flex',
    backgroundColor: '#EDEDED',
    top: 10,
    marginBottom: 70
  },
  flexFooter: {
    backgroundColor: 'red'
  },
  image:{
    backgroundColor: 'transparent',
    height: 100
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
    height: '100%'
  },
  flexHeader:{
    height: 45,
  },
  header:{
    zIndex: 2,
    textAlign: 'center',
    top: 11,
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 3,
    color: '#FFFFFF',
    fontWeight: "300"
  }
});
