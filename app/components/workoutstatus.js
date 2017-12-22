import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import {NativeRouter, Link} from 'react-router-native'

export default class WorkoutStatus extends Component{
  constructor(props){
    super(props)
    this.state = {
      test: null
    }
  }

  render(){
    return(
      <Link
        to='WorkoutDetails'
        component={TouchableOpacity}
        >
      <View style={styles.border}>
        <View style={styles.wrapper}>
          <Text style={styles.date}>{this.props.date}</Text>
          <Text style={styles.workout}>{this.props.workout}</Text>
          <Image style={styles.icon}source={require('../../img/completed/Completed.png')}></Image>
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
  },
  border:{
    borderTopWidth: 1,
    borderColor: '#E5E3E3'
  },
  workout:{
    fontFamily: 'Helvetica-Light',
    fontSize: 24,
    letterSpacing: 1,
    marginRight: 5,
  },
  date:{
    color: '#989898',
    fontSize: 10,
    marginTop: 10
  },
})
