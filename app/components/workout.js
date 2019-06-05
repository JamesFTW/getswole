
import React, { PureComponent } from 'react'
import { connect }              from 'react-redux'
import SwipeableViews           from 'react-swipeable-views-native'
import * as actions             from '../actions'
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native'

const minusButton = 'Vectorminus'
const plusButton = 'plusplus'

const Container = ({ styleid, children }) => {
  if (styleid % 2 === 0) {
    return (
    <View style={styles.container2}>
      {children}
    </View>
    )
  } else {
    return (
    <View style={styles.container}>
      {children}
    </View>
    )
  }
}

export class Workout extends PureComponent {
  onDecrement = () => {
    const { decrement, id } = this.props
    decrement(id)
  }

  onIncrement = () => {
    const { increment, id } = this.props
    increment(id)
  }

  render() {
    const {
      type,
      rep,
      id,
      styleid,
      sets,
      weight,
      key
    } = this.props

    return (
      <SwipeableViews style={styles.slideContainer}>
        <Container id={id} styleid={styleid} key={key}>
          <Text style={styles.workout}>{type}</Text>
          <Text style={styles.weight}>{weight} lb</Text>
          <Text style={styles.set}> {sets} sets x {rep} reps </Text>

          <TouchableHighlight
            underlayColor = {"rgba(0, 0, 0, 0)"}
            activeOpacity ={.5}
            onPress={this.onDecrement}
          >
            <Image style={styles.minus} source={{uri: minusButton}} />
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={.5} onPress={this.onIncrement}>
            <Image style={styles.plus} source={{uri: plusButton}} />
          </TouchableHighlight>
        </Container>

        <View style={styles.slide1}>
          <Text style={styles.completed}>{type} completed!</Text>
        </View>
      </SwipeableViews>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.weightCounter[ownProps.id]
}


const ConnectedNode = connect(mapStateToProps, actions)(Workout)

const styles = StyleSheet.create({
  slideContainer:{
    height: 125,
  },
  container: {
    height: 125,
    alignItems: 'center',
    backgroundColor: '#EDEDED'
  },
  container2: {
    height: 125,
    alignItems: 'center',
    backgroundColor: '#E0E0E0'
  },
  workout: {
    fontSize: 36,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 2,
    textAlign: 'auto',
    color: '#1F1C1C',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  weight: {
    fontSize: 34,
    fontFamily: 'HelveticaNeue-Medium',
    textAlign: 'center',
    letterSpacing: -1,
    color: '#1A1A1A',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  set: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Thin',
    top:10,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  minus:{
    right: 105,
    bottom: 60,
    height: 38,
    width: 35
  },
  plus:{
    left: 105,
    bottom: 100,
    height: 38,
    width: 35
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

export default ConnectedNode