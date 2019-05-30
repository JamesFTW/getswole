
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
    } = this.props

    const SwitchContent = workoutSelected? <WorkoutContainer /> : <StatsScreen />
    const workoutName = workoutSelected? "Leg Day" : "Exercise Stats"

    return (
      <BackGroundWrapper>
        <Header 
          workoutName={workoutName}
          workoutDate="Today's Workout"
        />
        { SwitchContent }
      </BackGroundWrapper>
    )
  }
}

const mapStateToProps = state => {
  return state.workoutHeaderReducer
}

const ConnectedNode = connect(mapStateToProps)(WorkoutSwitchScreen)
export default ConnectedNode

