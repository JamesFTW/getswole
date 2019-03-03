import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class GreenHeader extends PureComponent {
  render() {
    const { title } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Text style={styles.header}>{title}</Text>
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
    backgroundColor: '#40D4BB',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: .05,
    color: '#FFFFFF',
    fontWeight: "300"
  },
  image: {
    backgroundColor: 'transparent',
  },
})
