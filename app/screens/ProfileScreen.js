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

import Navbar from '../components/navbar.js'
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

          <View style={styles.userContainer}>
            <Image
              style={styles.profilePhotoStyle}
              source={{uri: this.state.profilePhoto}}
            />

            <View style={styles.followingContainer}>
              <View style={styles.followNumbersContainer}>
                <Text style={styles.followingCount}>{this.state.following}</Text>
                <Text style={styles.followerCount}>{this.state.followers}</Text>
              </View>
              <Text style={styles.followingText}> Following </Text>
              <Text style={styles.followerText}> Followers </Text>
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
  followingContainer:{
    bottom: 40,
    right: 5
  },
  followNumbersContainer:{
    top: 27
  },
  followingText:{
    zIndex: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    left: 100,
    bottom: 10,
    fontSize: 12
  },
  followingCount:{
    zIndex: 434,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    left: 115,
    bottom: 15,
    fontSize: 18
  },
  followerCount:{
    zIndex: 3,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontFamily: 'HelveticaNeue',
    left: 173,
    bottom: 36,
    fontSize: 18
  },
  followerText:{
    zIndex: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    left: 165,
    bottom: 24,
    fontSize: 12
  },
  userContainer:{
    position: 'absolute',
    top: 55
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
