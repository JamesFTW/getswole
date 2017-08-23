import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';

import Navbar         from '../components/navbar.js'
let data = require('../../sampleProfile.json')

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      workouts: data.exercises,
      workoutName: data.workout
      }
  }
  render(){
    return(
      <View style={styles.container2}>
        <View style={styles.flexContainer}>

          <View style={styles.flexHeader}>
            <ImageBackground style={styles.image} source={require('../../img/header/header.png')}>
              <Text style={styles.header}>{this.state.workoutName}</Text>
            </ImageBackground>
          </View>
          {/* <ScrollView style={styles.flexBody}>

          </ScrollView> */}


        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexHeader:{
    height: 45
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
  header:{
    zIndex: 3,
    textAlign: 'center',
    top: 11,
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 3,
    color: '#FFFFFF',
    fontWeight: "300"
  },
  image:{
    backgroundColor: 'transparent',
  },
});
