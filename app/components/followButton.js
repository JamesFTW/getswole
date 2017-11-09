import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

let data = require('../../user.json')

export default class FollowButton extends Component {
  constructor(props){
    super(props)
    this.state ={
      following: false
    }
  }
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.ButtonContainer}>
          <View style={styles.ButtonTextContainer}>
            <Text style={styles.ButtonText}>Follow</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  ButtonContainer:{
    height: 40,
    width: 123,
    left: 5,
    borderColor: '#AFAEAE',
    borderWidth: .5,
    bottom: 25,
    backgroundColor: '#DADADA'
  },
  ButtonTextContainer:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  ButtonText:{
    alignSelf: 'center',
    color: '#FFFCFC',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1
  },
})
