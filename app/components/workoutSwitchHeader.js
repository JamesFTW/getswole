
import React, { PureComponent } from 'react'
import { connect }  from 'react-redux'
import * as actions from '../actions'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

class WorkoutSwitchHeader extends PureComponent {

  changeSwitchStateWorkout = () => {
    const { toggleHeaderWorkout } = this.props
    toggleHeaderWorkout()
  }

  changeSwitchStateStats = () => {
    const { toggleHeaderStats } = this.props
    toggleHeaderStats()
  }

  render() {
    const {
      workoutDate,
      statsSelected,
      workoutSelected
    } = this.props

    if (workoutSelected) {
      Workout = (
        <TouchableOpacity style={styles.workoutContainerSelected}>
          <Text style={styles.workoutSelected}>{workoutDate}</Text>
        </TouchableOpacity>
      )
    } else {
      Workout = (
        <TouchableOpacity 
          onPress={this.changeSwitchStateWorkout} 
          style={styles.workoutContainer}>
            <Text style={styles.workout}>{workoutDate}</Text>
        </TouchableOpacity>
      )
    }

    if (statsSelected) {
      Stats = (
        <TouchableOpacity style={styles.statsContainerSelected}>
          <Text style={styles.statsSelected}>Your Stats</Text>
        </TouchableOpacity>
      )
    } else {
      Stats = (
        <TouchableOpacity
          onPress={this.changeSwitchStateStats}
          style={styles.statsContainer}>
            <Text style={styles.stats}>Your Stats</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <View style={styles.flexContent}>
            { Stats }
            { Workout }
          </View>
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return state.workoutHeaderReducer
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
    backgroundColor: '#EDEDED',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#5491FF'
  },
  statsContainerSelected: {
    flexDirection: 'row',
    width: '50%',
    backgroundColor: '#5491FF',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
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
  workoutContainerSelected: {
    flexDirection: 'row',
    width: '50%',
    backgroundColor: '#5491FF',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF'
  },
  stats: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: '#5491FF',
    fontWeight: '900',
    alignSelf: 'center'
  },
  statsSelected: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontWeight: '900',
    alignSelf: 'center'
  },
  workout: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: '#5491FF',
    fontWeight: '900',
    alignSelf: 'center'
  },
  workoutSelected: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontWeight: '900',
    alignSelf: 'center'
  }
})

const ConnectedNode = connect(mapStateToProps, actions)(WorkoutSwitchHeader)
export default ConnectedNode