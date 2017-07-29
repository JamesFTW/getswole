
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import WorkoutScreen  from './app/screens/WorkoutScreen.js'

export default class getswole extends Component {
  render() {
    return (
      <WorkoutScreen />
    );
  }
}

AppRegistry.registerComponent('getswole', () => getswole);
