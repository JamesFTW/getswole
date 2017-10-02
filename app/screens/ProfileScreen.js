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
      profilePhoto: data.profilePhoto
      }
  }
  
  render(){
    console.log(this.state.profilePhoto)
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

            <Image
              style={styles.profileStyle}
              source={{uri: this.state.profilePhoto}}
            />
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
  container2: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  profileStyle: {
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
