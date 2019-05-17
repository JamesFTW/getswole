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
            <View style={styles.statsContainer}>
              <Text style={styles.content}>Your Stats</Text>
            </View>
            <Text style={styles.content}>Next Workout</Text>
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
    marginTop: 30,
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
  content: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontWeight: '900',
    alignSelf: 'center'
  }
})