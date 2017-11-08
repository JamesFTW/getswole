import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class FollowButton extends Component {
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.followButton}>
          <View style={styles.otherButtonText}>
            <Text style={styles.ButtonText}>Follow</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  followButton:{
    height: 40,
    width: 123,
    left: 5,
    borderColor: '#AFAEAE',
    borderWidth: .5,
    bottom: 25,
    backgroundColor: '#DADADA'
  },
  otherButtonText:{
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
