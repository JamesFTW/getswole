import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class UserFirstName extends PureComponent {
  render() {
    const { firstName } = this.props

    return (
      <View style={styles.firstName}>
        <Text style={styles.firstNameText}>{firstName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  firstName: {
    // zIndex: 2312,
    alignItems: 'center',
    top: 20,
    marginLeft: 20,
    // right: 25,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  firstNameText: {
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1.5,
    color: '#6C6B6B',
    fontSize: 16,
    right: 12,
  },
})
