import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {NativeRouter, Link}   from 'react-router-native'

export default class Header extends Component{
  render(){
    return(
      <View style={styles.container2}>
        <View style={styles.flexContainer}>

          <View style={styles.flexHeader}>
            <ImageBackground style={styles.image} source={require('../../img/header/header.png')}/>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container2: {
    position: 'absolute',
  },
  flexHeader:{
    height: '5%'
  },
  flexContainer:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  image:{
    backgroundColor: 'transparent'
  },
})
