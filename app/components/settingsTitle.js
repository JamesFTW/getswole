import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text
} from 'react-native'

export default class SettingsTitle extends PureComponent {
  render() {
    const { title } = this.props
    
    return (
      <Text style={styles.container}>{title}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    lineHeight: 57,
    fontSize: 20,
    fontFamily: 'HelveticaNeue',
    color: '#6A7280',
    fontWeight: '500',
  }
})