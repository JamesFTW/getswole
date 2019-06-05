import React, { PureComponent } from 'react'
import { Link }   from 'react-router-native'

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import homeIcon      from '../assets/img/home/Home.png'
import homeActive    from '../assets/img/homeActive/Vector.png'
import userActive    from '../assets/img/userActive/Vector.png'
import workoutActive from '../assets/img/workoutActive/Frame.png'
import barbellIcon   from '../assets/img/workout/Frame.png'
import userIcon      from '../assets/img/user/Frame.png'

export default class Navbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      workout: true,
      profile: false
    }
  }

  onWorkoutPress = () => {
    this.setState({
      workout: true,
      profile: false
    })
  }

  onProfilePress = () => {
    this.setState({
      workout: false,
      profile: true
    })
  }

  render() {
    const { workout, profile } = this.state
    const workoutIcon = workout ? workoutActive : barbellIcon
    const profileIcon = profile ? userActive : userIcon

    return (
      <View style={styles.navRectangle}>
        <TouchableOpacity>
          <Image style={{ marginLeft: 40 }} source={homeIcon} />
        </TouchableOpacity>
        <Link
          to='/Workout'
          component={TouchableOpacity}
          onPress={this.onWorkoutPress}
          >
          <Image source={workoutIcon} />
        </Link>
        <Link
          to='/ProfileScreen'
          component={TouchableOpacity}
          onPress={this.onProfilePress}
          >
          <Image style={{ marginRight: 40}} source={profileIcon} />
        </Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navRectangle: {
    backgroundColor: '#E5E5E5',
    borderTopWidth: 1,
    borderTopColor: '#C2C2C2',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 0,
    paddingBottom: 12,
    paddingTop: 12,
    position: 'absolute',
    width: '100%'
  },
})
