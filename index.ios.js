
import React, { Component } from 'react';
import {AppRegistry}        from 'react-native';
import WorkoutScreen        from './app/screens/WorkoutScreen.js'
import routes               from './app/routes/routes.js'

export default class getswole extends Component {
  render() {
    return (
      <routes />
    );
  }
}

AppRegistry.registerComponent('getswole', () => routes);
