import React, {Component} from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Navbar             from '../components/navbar.js'
import CompletedWorkouts  from '../components/completedWorkouts.js'
import FollowButton       from '../components/followButton'
import WorkoutStatus      from '../components/workoutstatus.js'
//let data = require('../../json/user.json')

//Eventually have to figure out how to save this UUID for each user.
let userID = '3f266f5c-a55f-44ba-9839-11247689eb34'

let data = require('../../completedworkout.json')

import FBSDK, {LoginButton,LoginManager, AccessToken, loginActions, fetchLoginWithAPI, GraphRequest,
  GraphRequestManager} from 'react-native-fbsdk'

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      firstName: '',
      profilePhoto: '',
      following: 50000,
      followers: 50000,
      isLoading: true,
      status: data
      }
  }

  componentDidMount(){
    //possibly add some type of isLoading state
    fetch(`https://swole.herokuapp.com/users/${userID}`)
      .then(res => res.json())
      //.then(data => console.log(data))
      .then(data => this.setState({
        userName: data.username,
        firstName: data.firstname,
        profilePhoto: data.profilephoto,
        following: data.following,
        followers: data.followercount,
        isLoading: false,
      }))
      .catch(err => console.log(err))
  }
  _login(){
      LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
          console.log(result)
          if (result.isCancelled) {
            // Login was cancelled
          } else {
            console.log(result)
            AccessToken.getCurrentAccessToken().then((data) => {
              let accessToken = data.accessToken
              alert(accessToken.toString())

              const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result)
                  alert('Success fetching data: ' + result.toString());
                }
              }

              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: accessToken,
                  parameters: {
                    fields: {
                      string: 'email,first_name,middle_name,last_name,id'
                    }
                  }
                },
                responseInfoCallback
              );

              new GraphRequestManager().addRequest(infoRequest).start()
              console.log(infoRequest)
            }
          )
        }
      }
    )
  }

  render(){
    console.log(this.state)
    if (this.state.isLoading) {
     return (
       <View style={styles.loading}>
         <ActivityIndicator
           size = "large"
         />
       </View>
     );
   }
    return(
      <View style={styles.container2}>
        <View style={styles.flexHeader}>
          <ImageBackground style={styles.image}>
            <Text style={styles.header}>{this.state.userName}</Text>
          </ImageBackground>

          <TouchableOpacity>
            <ImageBackground style={styles.settings} source={require('../../img/settings/Settings.png')}/>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.flexContainer}>

          {/* <Button
            onPress={() => this._login()}
            title='Login With Facebook'/> */}


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
              <View style={styles.followButton}>
                <FollowButton/>
              </View>
            </View>

          </View>
          <View style={styles.completedWorkouts}>
          <CompletedWorkouts/>
          </View>

          <View style={styles.workoutstats}>
            {this.state.status.map((exercise, i) => {
              return (
                <View key={i}>
                  <WorkoutStatus key={i} date={exercise.date} workout={exercise.workout}/>
                </View>
              )
            })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexHeader:{
    height: 55,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#40D4BB',
    shadowColor: '#C7C7C7',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  workoutstats:{
    //bottom: 90,
    height: '120%'
  },
  completedWorkouts:{
    //marginTop: 50,
    //marginBottom: 80
    // bottom: 85
  },
  loading:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstName:{
    zIndex: 2312,
    alignItems: 'center',
    top: 20,
    marginLeft: 77,
    right: 25,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  firstNameText:{
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1.5,
    color: '#6C6B6B',
    fontSize: 16,
    right: 12,
  },
  followButton:{
    //marginLeft: 5,
    right: 5,
    top: 3
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
  followers:{
    top: 65
  },
  following:{
    top: 65,
    left: 5
  },
  followingText:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#6C6B6B',
    fontFamily: 'HelveticaNeue',
    //letterSpacing: 1,
    fontSize: 12
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
  container2: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 15
  },
  profilePhotoStyle: {
    width: 80,
    height: 80,
    borderRadius: 5
  },
  flexContainer:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom:60
  },
  header:{
    zIndex: 3,
    textAlign: 'center',
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
    position: 'absolute'
  },
});
