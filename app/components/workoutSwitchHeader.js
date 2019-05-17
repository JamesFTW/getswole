import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class WorkoutSwitchHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <View style={styles.flexContent}>
            <TouchableOpacity style={styles.statsContainer}>
              <Text style={styles.stats}>Your Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.workoutContainer}>
              <Text style={styles.workout}>Next Workout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    marginTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  switch: {
    height: '100%',
    width: '100%',
    backgroundColor: '#EDEDED',
    borderColor: '#5491FF',
    borderWidth: 2,
    borderRadius: 25
  },
  flexContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    width: '50%',
    backgroundColor: '#5491FF',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    textAlign: 'center',
    justifyContent: 'center'
  },
  workoutContainer: {
    flexDirection: 'row',
    width: '50%',
    backgroundColor: '#EDEDED',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#5491FF'
  },
  stats: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontWeight: '900',
    alignSelf: 'center'
  },
  workout: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: '#5491FF',
    fontWeight: '900',
    alignSelf: 'center'
  }
})