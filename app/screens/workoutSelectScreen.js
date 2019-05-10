
import React, { PureComponent } from 'react'
import GreenHeader              from '../components/greenHeader'
import WorkoutSelect            from '../components/workoutSelect'
import BackGroundWrapper        from '../components/backGroundWrapper.js'
import { getWorkoutSelections } from '../api'

import {
  ScrollView,
  StyleSheet
} from 'react-native'

export default class WorkoutSelectScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
  }

  componentDidMount() {
    //this is going to be an array of ids eventually
    getWorkoutSelections('57bb4378-c268-468e-a6dd-9989fdee0601')
      .then(data => {
        this.setState({
          workouts: [data]
        })
      }
    )
  }
  render() {
    const { workouts } = this.state
  
    const workoutButtons = workouts.map((info, i) => (
      <WorkoutSelect
        key={i}
        workoutPhoto={info.image}
        workoutTitle={info.planname}
        workoutId={info.planid}
        length={info.length}
      />  
    ))
    
    return (
      <BackGroundWrapper>
        <GreenHeader title={"Pick Workout Plan"} />
        <ScrollView style={styles.container}>
          { workoutButtons }
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 30
  }
})