
import React, { Component }      from 'react'
import CenterOfScreen            from '../components/centerOfScreen.js'
import { dayOfWeek, formatDate } from '../../util/'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

const Card_Icon = 'Card_Icon'
const Workout_Icon_Card = 'Workout_Icon_Card'

const WorkoutList = ({ exercise }) => (
  <View style={styles.workoutFlex}>
    <Text style={styles.exerciseText}>{ exercise }</Text>
    <Image
      style={styles.photo}
      source={{ uri: Card_Icon }}
    />
  </View>
)

export default class CompletedWorkoutCard extends Component {
  render() {
    const {
      exercises,
      workoutName
    } = this.props

    let totalWeight = 0
    let completedDate = ''
    
    const Workouts = exercises.map((exercise, i) => {
      totalWeight = totalWeight + exercise.weightused
      completedDate = exercise.createdAt
      return <WorkoutList key={i} exercise={exercise.exercise} />
    })
    
    let day = dayOfWeek(completedDate)
    let date = formatDate(completedDate)

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <CenterOfScreen>
              <Text style={styles.workout}>{workoutName}</Text>
            </CenterOfScreen>
          </View>
          <View style={styles.date}>
            <CenterOfScreen>
              <Text style={styles.dateText}>{day} {date}</Text>
            </CenterOfScreen>
          </View>

          <View style={styles.weightLifted}>
            <CenterOfScreen>
              <Text style={styles.weightLiftedText}>Total Weight Lifted:</Text>
            </CenterOfScreen>
          </View>

          <View style={styles.weight}>
            <CenterOfScreen>
              <Text style={styles.weightText}>{totalWeight} LBS</Text>
            </CenterOfScreen>
          </View>

          <View style={styles.workoutsContainer}>
            { Workouts }
          </View>
          <View style={styles.footer}>
            <CenterOfScreen>
            <Image
              style={styles.icon}
              source={{ uri: Workout_Icon_Card }}
            />
            </CenterOfScreen>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    marginBottom: 10 
  },
  photo: {
    height: 20,
    width: 20
  },
  icon: {
    height: 30,
    width: 42
  },
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },
  workoutsContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginTop: 15,
    marginBottom: 40
  },
  workoutFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25
  },
  card: {
    height: 338,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: '#5491FF',
    borderRadius: 20
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 41,
    backgroundColor: '#4EE5CF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  workout: {
    fontSize: 24,
    fontFamily: 'HelveticaNeue',
    color: 'white',
    fontWeight: '700',
  },
  date: {
    height: 24,
    width: '100%',
    position: 'relative'
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    color: 'white',
  },
  weightLifted: {
    position: 'relative',
    width: '100%',
    height: 21
  },
  weightLiftedText: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    color: 'white',
  },
  weight: {
    position: 'relative',
    width: '100%',
    height: 64
  },
  weightText: {
    fontSize: 64,
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    color: 'white',
  },
  exerciseText: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    color: 'white',
  }
})