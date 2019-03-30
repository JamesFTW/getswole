import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Image
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

export default class LoginWrapper extends Component {
  render() {
    const { children, photo } = this.props

    return (
      <View style={styles.flexContainer}>
        <LinearGradient 
          start={{ x: -0.20, y: 0.25 }} 
          end={{ x: 1.5, y: 1.0 }} 
          colors={['#40D4BB', '#BB6BD9']} 
          style={styles.gradient}>
          <View style={styles.blackLayer}/>
          <Image 
            style={styles.photo} 
            source={{ uri: photo }}>
          </Image>              
        </LinearGradient>
        <View style={styles.children}>
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gradient: {
    height: '100%'
  },
  children: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    height: '100%',
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
  },
  photo: {
    position: 'relative',
    height: '100%',
    opacity: .02
  }
})