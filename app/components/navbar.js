import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class Navbar extends Component{
  render(){
    return(
      <View style={styles.navRectangle}>
        <TouchableOpacity>
          <Image style={{ marginLeft: 20 }} source={require('../../img/home/Home.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../img/workout/Vector.png')} style={{ marginRight: 5}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ marginRight: 20 }} source={require('../../img/user/noun.png')} />
        </TouchableOpacity>
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
