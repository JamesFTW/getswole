
import React, { Component }   from 'react'
import { Redirect }           from "react-router-native"
import { connect }            from 'react-redux'
import BackGroundWrapper      from '../components/backGroundWrapper.js'
import Header                 from '../components/header.js'
import WorkoutContainer       from '../containers/workoutContainer.js'
import StatsScreen            from '../screens/statsScreen.js'
import { getUserWorkoutPlan } from '../api'

class WorkoutSwitchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      redirectToWorkoutSelectScreen: false
    }
  }

  async componentDidMount() {
    try {
      let res = await getUserWorkoutPlan()
      
      res.status === 200 ? 
        this.setState({ isLoading:false }) : 
        this.setState({ redirectToWorkoutSelectScreen: true })

    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { workoutSelected } = this.props
    const { redirectToWorkoutSelectScreen } = this.state

     if (redirectToWorkoutSelectScreen) {
      return <Redirect to='/WorkoutSelect' />
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

