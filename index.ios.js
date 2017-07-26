
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import Navbar         from './app/components/navbar.js';
import Workout        from './app/components/Workout.js'

let data = require('./sample.json')

export default class getswole extends Component {
  constructor(props){
    super(props)
    this.state = {
      workouts: data.exercises,
      workoutName: data.workout
      }
  }
  render() {
    return (
    <View style={styles.container2}>
      <View style={styles.flexContainer}>

        <View style={styles.flexHeader}>
          <Image style={styles.image} source={require('./img/header/header.png')}>
            <Text style={styles.header}>{this.state.workoutName}</Text>
          </Image>
        </View>

        <ScrollView style={styles.flexBody}>
          {this.state.workouts.map((exercise, i) => {
            return (
              <View key={i}>
                <Workout id={exercise.id} type={exercise.type} weight={exercise.weight} sets={exercise.sets} rep={exercise.rep}/>
              </View>
            )
          })}
        </ScrollView>

        <View style={styles.flexFooter}>
          <Navbar />
        </View>

      </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  flexBody:{
    flex: 1,
    display: 'flex',
    backgroundColor: '#EDEDED'
  },
  flexFooter: {
    backgroundColor: 'red'
  },
  image:{
    backgroundColor: 'transparent'
  },
  container2: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0
  },
  flexContainer:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
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

AppRegistry.registerComponent('getswole', () => getswole);
