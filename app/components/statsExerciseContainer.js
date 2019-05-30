import React, { Component } from 'react'
import StatsExercise        from '../components/statsExercise'

import {
  View,
  StyleSheet,
} from 'react-native'

const bodyParts = [
  'Arms',
  'Legs',
  'Shoulders',
  'Back',
  'Abs'
]

export default class StatsExerciseContainer extends Component {
  render() {
    const ExerciseStats = bodyParts.map((exercise, i) => (
      <StatsExercise id={exercise} key={i.toString()} bodyPart={exercise} />
    ))

    return (
      <View style={styles.container}>
        { ExerciseStats }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingBottom: 25,
  }
})