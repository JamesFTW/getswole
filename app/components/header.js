import React, { PureComponent } from 'react'
import WorkoutSwitchHeader from './workoutSwitchHeader.js'

import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native'

const HEADERPHOTO = 'header'

export default class Header extends PureComponent {
  render(){
    const {
      workoutName,
      getHeaderState
    } = this.props

    return (
      <View style={styles.flexHeader}>
        <ImageBackground style={styles.image} source={{uri: HEADERPHOTO}}>
          <Text style={styles.header}>{workoutName}</Text>
          <WorkoutSwitchHeader getHeaderState={e => getHeaderState(e)} />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexHeader: {
    shadowColor: '#C7C7C7',
  },
  header: {
    textAlign: 'center',
    top: 11,
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 3,
    color: '#FFFFFF',
    fontWeight: "300"
  },
  image:{
    backgroundColor: 'transparent',
    height: 120
  },
})
