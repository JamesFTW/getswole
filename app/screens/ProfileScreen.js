import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Navbar       from '../components/navbar.js'
import FollowButton from '../components/followButton'
let data = require('../../user.json')

export default class ProfileScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      userName: data.userName,
      profilePhoto: data.profilePhoto,
      following: data.following,
      followers: data.followers
      }
  }

  render(){
    return(
      <View style={styles.container2}>
        <View style={styles.flexContainer}>

          <View style={styles.flexHeader}>
            <ImageBackground style={styles.image}>
              <Text style={styles.header}>{this.state.userName}</Text>
            </ImageBackground>

            <TouchableOpacity>
              <ImageBackground style={styles.settings} source={require('../../img/settings/Settings.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.firstName}>
            <Text style={styles.firstNameText}>{this.state.firstName}</Text>
          </View>

          <View style={styles.userContainer}>
            <Image
              style={styles.profilePhotoStyle}
              source={{uri: this.state.profilePhoto}}
            />

            <View style={styles.followingContainer}>
              <View style={styles.following}>
                <Text style={styles.followingCount}>{this.state.following}</Text>
                <Text style={styles.followingText}> Following </Text>
              </View>

              <View style={styles.followers}>
                <Text style={styles.followerCount}>{this.state.followers}</Text>
                <Text style={styles.followerText}> Followers </Text>
              </View>

              <FollowButton/>
            </View>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexHeader:{
    height: 55,
    backgroundColor: '#40D4BB'
  },
  firstName:{
    zIndex: 2312,
    alignItems: 'center',
    top: 10,
    marginLeft: 77,
    right: 25,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  firstNameText:{
    color: '#424040',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1,
    fontSize: 18
  },
  followingContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    bottom: 5,
    left: 95
  },
  followers:{
    alignSelf: 'center',
    bottom: 25
  },
  following:{
    alignSelf: 'center',
    bottom: 25
  },
  followingText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1,
    fontSize: 12
  },
  followingCount:{
    position: 'relative',
    alignSelf: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1,
    fontSize: 20
  },
  followerCount:{
    position: 'relative',
    alignSelf: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1,
    fontSize: 20
  },
  followerText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1,
    fontSize: 12
  },
  userContainer:{
    position: 'relative',
    left: 2,
    bottom: 22,
    width: '100%'
  },
  container2: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  profilePhotoStyle: {
    width: 80,
    height: 80,
    borderRadius: 5,
    left: 10,
    top: 10
  },
  flexContainer:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  header:{
    zIndex: 3,
    textAlign: 'center',
    top: 11,
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 3,
    color: '#FFFFFF',
    fontWeight: "300"
  },
  image:{
    backgroundColor: 'transparent',
  },
  settings:{
    position: 'absolute',
    left: 330,
    bottom: 13,
    zIndex: 102
  },
});
