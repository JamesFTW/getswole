import React, { Component } from 'react'

import {
  StyleSheet
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

export default class LoginWrapper extends Component {
  render() {
    const { children } = this.props
    return (
      <LinearGradient 
        start={{ x: -0.20, y: 0.25 }} 
        end={{ x: 1.5, y: 1.0 }} 
        colors={['#40D4BB', '#BB6BD9']} 
        style={styles.flexContainer}>  
        {children}
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'black'
  }
})