import React, { PureComponent } from 'react'

import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const arrow = 'forward_arrow'

export default class StatsExercise extends PureComponent {
  render() {
    const { bodyPart } = this.props

    return (
      <TouchableOpacity style={styles.border}>
        <Text style={styles.text}>{bodyPart}</Text>
        <Image style={styles.icon} source={{ uri: arrow }}></Image>
      </TouchableOpacity >
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: '#545454',
    fontWeight: '500',
    paddingBottom: 5
  },
  border: {
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 2,
    paddingRight: 20,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    height: 24,
    width: 24,
    top: 3,
    alignItems: 'center'
  }
})