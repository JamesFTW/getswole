import React, { Component } from 'react'

import {
  StyleSheet,
  View
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

export default class LoginWrapper extends Component {
  render() {
    const { children } = this.props

    return (
      <View style={styles.flexContainer}>
        <LinearGradient 
          start={{ x: -0.20, y: 0.25 }} 
          end={{ x: 1.5, y: 1.0 }} 
          colors={['#40D4BB', '#BB6BD9']} 
          style={styles.gradient}>
          <View style={styles.blackLayer}/>
            {children}     
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gradient: {
    height: '100%'
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100
  },
  blackLayer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    opacity: .2
  }
})