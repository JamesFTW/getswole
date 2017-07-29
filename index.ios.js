
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

import Navbar         from './app/components/navbar.js'
import Workout        from './app/components/Workout.js'
import WorkoutScreen  from './app/screens/WorkoutScreen.js'

import { NativeRouter, Route, Link } from 'react-router-native'

let data = require('./sample.json')

export default class getswole extends Component {
  render() {
    return (
      <WorkoutScreen />
    );
  }
}

AppRegistry.registerComponent('getswole', () => getswole);
