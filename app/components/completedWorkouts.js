import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class CompletedWorkouts extends Component {
  render() {

    const { numWorkouts, weightLifted } = this.props

    return (
      <View style={styles.workoutCompleteWrap}>

        <View style={styles.workoutwrapper}>
          <Text style={styles.weight}>{numWorkouts}</Text>
          <Text style={styles.workoutText}> WORKOUTS</Text>
        </View>

        <View style={styles.completedWrap}>
          <Text style={styles.completedText}> Completed</Text>
        </View>

        <View style={styles.workoutwrapper}>
          {/* Most likely will pass data ass props in ProfileScreen */}
          <Text style={styles.weight}>{weightLifted}</Text>
          <Text style={styles.workoutText}> LBS</Text>
        </View>

        <View style={styles.completedWrap}>
          <Text style={styles.completedText}>Lifted</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  workoutCompleteWrap:{
    bottom: 15
  },
  workoutwrapper:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weight:{
    fontFamily: 'Helvetica-Bold',
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black'
  },
  workoutText:{
    fontFamily: 'HelveticaNeue-Thin',
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#4F4F4F',
    letterSpacing: 0
  },
  completedWrap:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  completedText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    letterSpacing: 1,
    right: 2,
  }
})
