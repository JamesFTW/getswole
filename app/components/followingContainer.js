import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FollowingContainer extends PureComponent {

  render() {
    const { children } = this.props

    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
    right: 5,
    paddingLeft: 15,
    bottom: 25
  },
})
