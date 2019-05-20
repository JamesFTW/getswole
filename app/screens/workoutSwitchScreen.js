
import React, { Component } from 'react'
import BackGroundWrapper    from '../components/backGroundWrapper.js'
import Header               from '../components/header.js'
import WorkoutContainer     from '../containers/workoutContainer.js'
import StatsScreen          from '../screens/statsScreen.js'
import { connect }          from 'react-redux'

class WorkoutSwitchScreen extends Component {
  render() {
    const {
      workoutSelected
    } = this.props.workoutHeaderReducer

    const SwitchContent = workoutSelected? <WorkoutContainer /> : <StatsScreen />

    return (
      <BackGroundWrapper>
        <Header 
          workoutName="Leg Day"
          workoutDate="Today's Workout"
        />
        { SwitchContent }
      </BackGroundWrapper>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const ConnectedNode = connect(mapStateToProps)(WorkoutSwitchScreen)
export default ConnectedNode

