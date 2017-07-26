
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import SwipeableViews from 'react-swipeable-views-native';

export default class Workout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weight: []
      }
      this._onPressButtonPlus       = this._onPressButtonPlus.bind(this)
      this._onPressButtonMinus      = this._onPressButtonMinus.bind(this)
  }
  componentWillMount(){
    this.setState({
      weight: this.props.weight
    })
  }
  _onPressButtonPlus(){
    this.setState({
      weight: this.state.weight + 1
    })
  }
  _onPressButtonMinus(){
    this.setState({
      weight: this.state.weight - 1
    })
  }
  render(){
    return(
      <SwipeableViews style={styles.slideContainer}>
        <View id={this.props.key} style={styles.container}>
          <Text style={styles.workout}>{this.props.type}</Text>
          <Text style={styles.weight}>{this.state.weight} lb</Text>
          <Text style={styles.set}>{this.props.sets} sets x {this.props.rep} reps </Text>

          <TouchableOpacity onPress={this._onPressButtonMinus}>
            <Image style={styles.minus} source={require('../../img/minus_button/Vectorminus.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButtonPlus}>
            <Image style={styles.plus} source={require('../../img/plus_button/plusplus.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.slide1}>
          <Text style={styles.completed}>{this.props.type} completed!</Text>
        </View>
      </SwipeableViews>
    )
  }
}

const styles = StyleSheet.create({
  slideContainer:{
    height: 125
  },
  container: {
    height: 125,
    alignItems: 'center',
    backgroundColor: '#EDEDED',
  },
  workout: {
    fontSize: 36,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 2,
    textAlign: 'auto',
    color: '#4F4F4F',
},
  weight: {
    fontSize: 34,
    fontFamily: 'HelveticaNeue-Medium',
    textAlign: 'center',
    letterSpacing: -1,
    color: '#4F4F4F'
},
  set: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Thin',
    top:10,
    textAlign: 'center',
    color: '#333333'
    },
  minus:{
    right: 105,
    bottom: 60,
    },
  plus:{
    left: 105,
    bottom: 100,
  },
  completed:{
    fontFamily: 'HelveticaNeue-Thin',
    color: '#FFFFFF',
    fontSize: 24,
    top: 20,
    textAlign: 'center'
  },
  slide1: {
    backgroundColor: '#40D4BB',
    height: 80,
    top: 20,
    bottom: 20
  }
})
