
import React, { Component } from 'react'
import BackGroundWrapper    from '../components/backGroundWrapper.js'
import Header               from '../components/header.js'
import Loading              from '../components/loading'
import WorkoutContainer     from '../containers/workoutContainer.js'
import StatsScreen          from '../screens/statsScreen.js'
import { connect }          from 'react-redux'

class WorkoutSwitchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    })
    /**
     * here is where you check if you has a current workoutplan.
     * if so show workout of the day or next workout.
     * if not show workoutSelectScreen
     */
  }
  render() {
    const { isLoading } = this.state
    const {
      workoutSelected
    } = this.props

    if(isLoading) {
      return <Loading/>
    }

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

