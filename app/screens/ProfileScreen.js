import React, { Component } from 'react'

import {
  View,
  ScrollView,
  ActivityIndicator,
  Text
} from 'react-native'

import BackGroundWrapper  from '../components/backGroundWrapper.js'
import ProfileHeader      from '../components/profileHeader.js'
import FollowButton       from '../components/followButton.js'
import UserFirstName      from '../components/userFirstName.js'
import UserContainer      from '../components/userContainer.js'
import FollowingContainer from '../components/followingContainer.js'
import ProfilePhoto       from '../components/profilePhoto.js'
import Following          from '../components/following.js'
import Followers          from '../components/followers.js'
import CompletedWorkouts  from '../components/completedWorkout.js'
import ScrollContent      from '../components/scrollContent.js'
import WorkoutStatus      from '../components/workoutStatus.js'

let data  = require('../completedworkout.json')
const me = require('../assets/img/me.jpg')

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isFollowing: false,
      status: data
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  //loop through following users list.
  //if id is in there following is set to true
  //if your own profile following has to change

  render() {
    const { isLoading } = this.state
    console.log(this.state)

    if(isLoading) {
      return <ActivityIndicator size="large"/>
    }
    return (
      <BackGroundWrapper>
        <ProfileHeader userName={"Jamesftw"}/>
        <ScrollContent>
          <UserFirstName firstName={"James"}/>
          <UserContainer>
            <ProfilePhoto photo={me}/>
            <FollowingContainer>
              <Following following={0} />
              <Followers followers={0} />
              <View style={{right: 5, top: 3}}>
                <FollowButton following={true} />
              </View>
            </FollowingContainer>
          </UserContainer>
          <CompletedWorkouts workouts={100} totalWeight={`100k`}/>
          {this.state.status.map((exercise, i) => {
              return (
                <View key={i}>
                  <WorkoutStatus key={i} completed={exercise.completed} id={exercise.statusID} date={exercise.date} workout={exercise.workout}/>
                </View>
              )
            })
          }
        </ScrollContent>
      </BackGroundWrapper>
    )
  }
}
