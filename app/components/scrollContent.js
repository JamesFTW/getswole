import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native'

export default class ScrollContent extends Component {

  render() {
    const { children } = this.props

    return (
      <ScrollView style={styles.container}>
        {children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom: 45
  },
})
