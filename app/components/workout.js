
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as actions         from '../actions'

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
      { children }
    </View>
    )
  } else {
    return (
    <View style={styles.container}>
      { children }
    </View>
    )
  }
}

class Workout extends Component {
  constructor(props) {
    super(props)
    this.timer = null
  }
  onDecrement = () => {
    const { decrement, id } = this.props
    decrement(id)
  }

  onIncrement = () => {
    const { increment, id } = this.props
    increment(id)
  }

  longDecrement = () => {
    const { decrementBy10, id } = this.props
    decrementBy10(id)
    this.timer = setTimeout(this.longDecrement, 200)
  }

  longIncrement = () => {
    const { incrementBy10, id} = this.props
    incrementBy10(id)
    this.timer = setTimeout(this.longIncrement, 200)
  }

  stopTimer = () => {
    clearTimeout(this.timer)
  }

  render() {
    const {
      exerciseName,
      rep,
      id,
      styleid,
      sets,
      weight,
      key
    } = this.props

    return (
      <View style={styles.slideContainer}>
        <Container id={id} styleid={styleid} key={key}>

        <Text style={styles.workout}>{ exerciseName }</Text>

          <View style={styles.weightIncrementRow}>

            <TouchableHighlight
              underlayColor = {"rgba(0, 0, 0, 0)"}
              activeOpacity ={.5}
              onPress={this.onDecrement}
              onLongPress={this.longDecrement}
              onPressOut={this.stopTimer}
            >
              <Image style={styles.minus} source={{uri: minusButton}} />
            </TouchableHighlight>

              <View style={styles.weightAndReps}>
                <Text style={styles.weight}>{ weight } lb</Text>
                <Text style={styles.set}> { sets } sets x { rep } reps </Text>
              </View>

            <TouchableHighlight 
              underlayColor={"rgba(0, 0, 0, 0)"}
              activeOpacity={.5} 
              onPress={this.onIncrement}
              onLongPress={this.longIncrement}
              onPressOut={this.stopTimer}
            >
              <Image style={styles.plus} source={{uri: plusButton}} />
            </TouchableHighlight>
          </View>
        </Container>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const ConnectedNode = connect(mapStateToProps, actions)(Workout)

const styles = StyleSheet.create({
  slideContainer: {
    width: '100%'
  },
  weightIncrementRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  weightAndReps: {
    marginRight: 25,
    marginLeft: 30
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    paddingTop: 12,
    paddingBottom: 12,
    flex: 1,
    flexDirection: 'column',
  },
  container2: {
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    paddingTop: 12,
    paddingBottom: 12,
    flex: 1,
    flexDirection: 'column',
  },
  workout: {
    fontSize: 34,
    fontFamily: 'HelveticaNeue',
    fontWeight: '200',
    letterSpacing: 2,
    textAlign: 'center',
    color: '#1F1C1C',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  weight: {
    fontSize: 40,
    fontFamily: 'HelveticaNeue-Medium',
    textAlign: 'center',
    letterSpacing: -1,
    color: '#1A1A1A',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  set: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Thin',
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  minus: {
    height: 43.43,
    width: 40,
    marginBottom: 15
  },
  plus: {
    height: 43.43,
    width: 40,
    marginBottom: 15
  }
})

export default ConnectedNode
