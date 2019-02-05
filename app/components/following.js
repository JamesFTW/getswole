import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Following extends PureComponent {

  render() {
    const { following } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.followingCount}>{following}</Text>
        <Text style={styles.followingText}> Following </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 65,
    left: 5
  },
  followingCount:{
    alignSelf: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    fontSize: 20
  },
  followingText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    fontSize: 12
  },
})
