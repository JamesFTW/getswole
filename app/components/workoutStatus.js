import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native'

import { Link } from 'react-router-native'

const Completed = 'Completed'

export default class WorkoutStatus extends Component {
  render() {
    const id = this.props.id

    return (
      <Link
        to={`/ProfileScreen/WorkoutDetails/${id}`}
        component={TouchableOpacity}
        >
      <View style={styles.border}>
        <View style={styles.wrapper}>
          <Text style={styles.date}>{this.props.date}</Text>
          <Text style={styles.workout}>{this.props.workout}</Text>
          <Image style={styles.icon} source={{uri: Completed}}></Image>
        </View>
      </View>
    </Link>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 5,
    paddingBottom: 1,
    paddingTop: 1,
    textAlign: 'center',
    height: 35
  },
  icon: {
    height: 30,
    width: 30,
    top: 3,
    alignItems: 'center'
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#E5E3E3',
    // paddingBottom: 5
  },
  workout: {
    fontFamily: 'Helvetica-Light',
    fontSize: 24,
    lineHeight: 35,
    letterSpacing: 1,
    color: '#1F1C1C',
    marginRight: 5,
  },
  date: {
    color: '#989898',
    fontSize: 10,
    lineHeight: 35
  },
})
