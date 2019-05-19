
import React, { Component } from 'react'
import BackGroundWrapper    from '../components/backGroundWrapper.js'
import Header               from '../components/header.js'
import WorkoutContainer     from '../containers/workoutContainer.js'
import StatsScreen          from '../screens/statsScreen.js'

export default class WorkoutSwitchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutSelected: true,
      statsSelected: false
    }
  }
  getScreen = headerState => {
    const { 
      workoutSelected,
      statsSelected
    } = headerState

    this.setState({
      workoutSelected,
      statsSelected
    })
  }
  render() {
    const { workoutSelected } = this.state

    if (workoutSelected) {
      SwithContent = <WorkoutContainer/>
    } else {
      SwithContent = <StatsScreen />
    }
    return (
      <BackGroundWrapper>
        <Header 
          getHeaderState={this.getScreen} 
          workoutName="Leg Day"
          workoutDate="Today's Workout"
        />
        { SwithContent }
      </BackGroundWrapper>
    )
  }
}