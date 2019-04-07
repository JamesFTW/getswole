import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

const DUMBBELL = 'loginIcon'

export default class SwoleLoginLogo extends PureComponent {
  render() {

    return (
      <View style={styles.buttonContainer}>
        <Image source={{ uri: DUMBBELL }} style={styles.checkIcon}/>
        <Text style={styles.text}>
          SWOLE
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Bold',
    letterSpacing: 5,
    color: '#FFFFFF',
    fontWeight: '700',
    marginLeft: 5
  },
  checkIcon: {
    height: 96 / 1.5,
    width: 111 / 1.5,
    marginBottom: 20,
    position: 'relative'
  },
  buttonContainer: {
    position: 'relative',
    alignItems: 'center',
    marginLeft: 5
  }
})
