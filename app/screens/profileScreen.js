
import React, { Component } from 'react'
import { View }             from 'react-native'
import FollowButton         from '../containers/followButton.js'
import BackGroundWrapper    from '../components/backGroundWrapper.js'
import ProfileHeader        from '../components/profileHeader.js'
import UserFirstName        from '../components/userFirstName.js'
import UserContainer        from '../components/userContainer.js'
import FollowingContainer   from '../components/followingContainer.js'
import ProfilePhoto         from '../components/profilePhoto.js'
import Following            from '../components/following.js'
import Followers            from '../components/followers.js'
import CompletedWorkouts    from '../components/completedWorkout.js'
import ScrollContent        from '../components/scrollContent.js'
import WorkoutStatus        from '../components/workoutStatus.js'
import { 
  getUserFromCache,
  getUserSession,
  getUser
} from '../api'

let data = require('../completedworkout.json')

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isFollowing: false,
      userName: '',
      profilePhoto: '',
      status: data
    }
  }

  async componentDidMount() {
    try {
      let user = await getUserFromCache()
      
      if (user === null) {
        let id   = await getUserSession()
        let user = await getUser(id.user.id)

        this.setState({
          isLoading: false,
          userName: user.username,
          profilePhoto: user.profilephoto
        })
      }
      
      this.setState({
        isLoading: false,
        userName: user.username,
        profilePhoto: user.profilephoto
      })

    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const {
      isLoading,
      status,
      userName,
      profilePhoto
    } = this.state

    // if (isLoading) {
    //   return <ActivityIndicator size="large" />
    // }

    const CompletedWorkoutDetails = status.map((exercise, i) => {
      return (
        <View key={i}>
          <WorkoutStatus 
            key={i} 
            completed={exercise.completed} 
            id={exercise.statusID} 
            date={exercise.date} 
            workout={exercise.workout}
          />
        </View>
      )
    })
    
    return (
      <BackGroundWrapper>
        <ProfileHeader userName={userName}/>
        <ScrollContent>
          <UserFirstName />
          <UserContainer>
            <ProfilePhoto photo={profilePhoto}/>
            <FollowingContainer>
              <Following following={0} />
              <Followers followers={0} />
              <View style={{right: 5, top: 3}}>
                <FollowButton/>
              </View>
            </FollowingContainer>
          </UserContainer>
          <CompletedWorkouts workouts={100} totalWeight={`100k`}/>
          { CompletedWorkoutDetails }
        </ScrollContent>
      </BackGroundWrapper>
    )
  }
}
