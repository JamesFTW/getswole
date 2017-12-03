import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

let data = require('../../completedworkout.json')

export default class CompletedWorkouts extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: null
    }
  }
  render(){
    return(
      <View style={styles.workoutCompleteWrap}>
        
        <View style={styles.workoutwrapper}>
          <Text style={styles.weight}>100 </Text>
          <Text style={styles.workoutText}>Workouts</Text>
        </View>

        <View style={styles.completedWrap}>
          <Text style={styles.completedText}>Completed</Text>
        </View>

        <View style={styles.workoutwrapper}>
          {/* Most likely will pass data ass props in ProfileScreen */}
          <Text style={styles.weight}>100k </Text>
          <Text style={styles.workoutText}>lbs</Text>
        </View>

        <View style={styles.completedWrap}>
          <Text style={styles.completedText}>Lifted</Text>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  workoutwrapper:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weight:{
    fontFamily: 'Helvetica-Bold',
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    //letterSpacing: 1
  },
  workoutText:{
    fontFamily: 'HelveticaNeue-Thin',
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    letterSpacing: 1
  },
  completedWrap:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  completedText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    letterSpacing: 1
  }
})
