
import React, { PureComponent } from 'react'
import GreenHeader               from '../components/greenHeader'
import WorkoutSelect            from '../components/workoutSelect'
import BackGroundWrapper        from '../components/backGroundWrapper.js'

import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native'

export default class WorkoutSelectScreen extends PureComponent {
  render() {
    return (
      <BackGroundWrapper>
        <GreenHeader title={"Pick Workout Plan"} />
        <ScrollView style={styles.container}>
          <View style={styles.row}>
            <WorkoutSelect 
              workoutTitle={"12-week Go Dumb Plan"}
              workoutPhoto={'workout1'} 
              />
            <WorkoutSelect
              workoutTitle={"10-week Full Body"}
              workoutPhoto={'workout'}
            />
            <WorkoutSelect
              workoutTitle={"10-week Fat Burner"}
              workoutPhoto={'workout3'}
            />
            <WorkoutSelect
              workoutTitle={"5-week That Get Right"}
              workoutPhoto={'workout4'}
            />
            <WorkoutSelect
              workoutTitle={"10-week Get Right"}
              workoutPhoto={'workout5'}
            />
            <WorkoutSelect
              workoutTitle={"10-week Get Right"}
              workoutPhoto={'workout6'}
            />
          </View>
        </ScrollView>
      </BackGroundWrapper>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between'
  },
  container: {
    alignContent: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 30
  }
})