
import React, { PureComponent } from 'react'

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native'

import { Link } from 'react-router-native'

export default class WorkoutSelect extends PureComponent {
  render() {
    const {
      workoutPhoto,
      workoutTitle,
      workoutId,
      length
    } = this.props

    return (
      <Link 
        to={{
          pathname: `/WorkoutSelect/SelectDateScreen/${workoutId}`,
          state: {
            workoutId,
            length
          }
        }}
        component={TouchableOpacity}
        >
        <ImageBackground style={styles.container} source={{ uri: workoutPhoto }}>
          <Text style={styles.title}>{workoutTitle}</Text>
        </ImageBackground>
      </Link>              
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 137,
    width: 158,
    marginBottom: 60,
    backgroundColor: '#66B4C4',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#4F4F4F',
    shadowOpacity: .6
  },
  title: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: .25
  }
})