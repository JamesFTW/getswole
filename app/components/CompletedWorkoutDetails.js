import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View
} from 'react-native';

export default class CompletedWorkoutDetails extends Component {
  constructor(props){
    super(props)
  }
  render() {
  console.log(this.state)
    return (
      <View style={styles.border}>
        <View style={styles.temp_details}>
          <View style={styles.date_time_wrapper}>
            <Text style={styles.date}>12/4/16</Text>
            <Text style={styles.time}>9:30am</Text>
          </View>

          <View style={styles.workout_weight_wrapper}>
            <Text style={styles.workout}>Leg Extension</Text>
            <Text style={styles.weight}>145</Text>
          </View>

          <View style={styles.sets_rep_wrapper}>
            <Text style={styles.sets}>4 sets</Text>
            <Text style={styles.reps}>12 reps</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  reps:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    color: '#989898',
    textAlign: 'center'
  },
  border:{
    borderTopWidth: 1,
    borderColor: '#D0CECE'
  },
  weight:{
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 30,
    color: '#1A1A1A'
  },
  sets_rep_wrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 20,
  },
  workout_weight_wrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  date_time_wrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 10
  },
  time:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    color: '#989898',
    textAlign: 'center'
  },
  sets:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    color: '#989898',
    textAlign: 'center'
  },
  workout:{
    fontFamily: 'Helvetica-Light',
    fontSize: 24,
    letterSpacing: 1,
    marginLeft: 5,
    color: '#1F1C1C'
  },
  date:{
    fontFamily: 'Helvetica-Light',
    fontSize: 10,
    marginTop: 10,
    color: '#989898'
  },
  temp_details:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 15,
    marginRight: 15,
  },
  completed:{
    textAlign: 'center',
    top: 10,
    backgroundColor: 'transparent',
    color: '#40D4BB',
    fontFamily: 'Helvetica',
    fontSize: 18
  },
});
