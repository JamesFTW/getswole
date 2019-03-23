import React, { PureComponent } from 'react'

import {
  StyleSheet,
  View
} from 'react-native'

export default class CenterOfScreen extends PureComponent {
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
