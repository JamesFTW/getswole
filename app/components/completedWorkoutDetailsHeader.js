import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View,
  Platform
} from 'react-native'

export default class CompletedWorkoutDetailsHeader extends Component {
  render() {
    const { currentStatus, currentWorkout} = this.props
    return (
      <View style={styles.flexheader}>
        <Text style={styles.completed}>{currentStatus}</Text>
        <Text style={styles.header}>{currentWorkout}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexheader: {
    backgroundColor: '#EDEDED',
    marginBottom: 30
  },
  completed: {
    textAlign: 'center',
    top: 10,
    backgroundColor: 'transparent',
    color: '#40D4BB',
    fontFamily: 'Helvetica',
    fontSize: 18
  },
  header: {
    textAlign: 'center',
    top: 11,
    fontSize: 40,
    marginLeft: 5,
    backgroundColor: 'transparent',
    fontFamily: 'HelveticaNeue-Bold',
    letterSpacing: 1,
    color: '#4F4F4F',
  },
})
