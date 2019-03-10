
import React, { PureComponent } from 'react'

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native'

import { Link } from 'react-router-native'

export default class WorkoutSelect extends PureComponent {
  render() {
    const { workoutPhoto, workoutTitle } = this.props

    return (
      <Link>
        <TouchableOpacity>
          <ImageBackground style={styles.container} source={{ uri: workoutPhoto }}>
              <Text style={styles.title}>{workoutTitle}</Text>
          </ImageBackground>
        </TouchableOpacity>
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

    shadowRadius: 6,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: .20
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