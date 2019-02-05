import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Followers extends PureComponent {

  render() {
    const { followers } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.followerCount}>{followers}</Text>
        <Text style={styles.followerText}> Followers </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 65
  },
  followerCount:{
    alignSelf: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    right: 2,
    fontSize: 20
  },
  followerText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    fontSize: 12
  },
})
