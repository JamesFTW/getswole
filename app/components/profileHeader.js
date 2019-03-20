import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class ProfileHeader extends PureComponent {
  render(){
    const { userName } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Text style={styles.header}>{userName}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#9A87D1',
  },
  header: {
    zIndex: 3,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 3,
    color: '#FFFFFF',
    fontWeight: '300'
  },
  image:{
    backgroundColor: 'transparent',
  },
})
