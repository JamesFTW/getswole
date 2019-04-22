import React, { Component } from 'react'

import {
  StyleSheet,
  View
} from 'react-native'

export default class BackGroundWrapper extends Component {

  render() {
    const { children } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: 20,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 15
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#EDEDED'
  },
})
