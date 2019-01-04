import React, { Component } from 'react'

import {
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

import FollowButton from './followButton'

export default class UserHeader extends Component {

  render() {
    return (
      <View style={styles.userContainer}>

        <Image
          style={styles.profilePhotoStyle}
          source={{uri: this.state.profilePhoto}}
        />

        <View style={styles.followingContainer}>
          <View style={styles.following}>
            <Text style={styles.followingCount}>{0}</Text>
            <Text style={styles.followingText}> Following </Text>
          </View>

          <View style={styles.followers}>
            <Text style={styles.followerCount}>{0}</Text>
            <Text style={styles.followerText}> Followers </Text>
          </View>
          <View style={styles.followButton}>
            <FollowButton/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userContainer:{
    position: 'relative',
    marginBottom: 40,
    borderRadius: 1,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#BFBFBF',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15
  },
  followingContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
    right: 5,
    paddingLeft: 15,
    bottom: 25
  },
  following:{
    top: 65,
    left: 5
  },
  followingCount:{
    alignSelf: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    fontSize: 20
  },
  followerCount:{
    alignSelf: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    right: 2,
    fontSize: 20
  },
  followerText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    fontSize: 12
  },
  followingText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    fontSize: 12
  },
  followers:{
    top: 65
  },
  followButton:{
    //marginLeft: 5,
    right: 5,
    top: 3
  }
})
