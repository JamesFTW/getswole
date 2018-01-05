import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {NativeRouter, Link}   from 'react-router-native'

export default class Navbar extends Component{
  render(){
    return(
      <View style={styles.navRectangle}>
        <TouchableOpacity>
          <Image style={{ marginLeft: 20, marginBottom: 10, paddingTop: 20 }} source={require('../../img/home/Home.png')} />
        </TouchableOpacity>
        <Link
          to='/'
          component={TouchableOpacity}
          >
          <Image source={require('../../img/workout/Vector.png')} style={{ marginRight: 10, marginBottom: 10}} />
        </Link>
        <Link
          to='ProfileScreen'
          component={TouchableOpacity}
          >
          <Image style={{ marginRight: 20, marginBottom: 10 }} source={require('../../img/user/noun.png')} />
        </Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navRectangle: {
    backgroundColor: '#E5E5E5',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#C2C2C2',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
})
