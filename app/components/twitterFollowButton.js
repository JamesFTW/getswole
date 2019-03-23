import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

const TWITTER_LOGO = 'twitterlogo'

export default class TwitterFollowButton extends PureComponent {
  render() {

    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.button}>
          <Image source={{ uri: TWITTER_LOGO }} style={styles.checkIcon} />
          <Text style={styles.title}>Log in with Twitter</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 51.33,
    backgroundColor: '#28A9E0',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    // paddingRight: '28%',
    // paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
    fontWeight: '700',
    marginLeft: 18
  },
  buttonContainer: {
    position: 'relative',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 60
  },
  checkIcon: {
    height: 32,
    width: 32,
    position: 'absolute',
    left: 0,
    marginLeft: 15
  }
})
