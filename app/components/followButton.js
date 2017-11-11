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
      following: false,
    }
    this._onPressTrue = this._onPressTrue.bind(this)
    this._onPressFalse = this._onPressFalse.bind(this)
  }
  _onPressTrue(){
    this.setState({
      following: true
    })
  }
  _onPressFalse(){
    this.setState({
      following: false
    })
  }
  render(){
    let state = this.state
    if(state.following == false){
      return(
        <TouchableOpacity onPress={this._onPressTrue}>
          <View style={styles.ButtonContainer}>
            <View style={styles.ButtonTextContainer}>
              <Image source={require('../../img/follow_plus/noun_119212_cc.png')} style={styles.plus_icon}/>
              <Text style={styles.ButtonText}>Follow</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }else{
      return(
        <TouchableOpacity onPress={this._onPressFalse}>
          <View style={styles.ButtonContainerFalse}>
            <View style={styles.ButtonTextContainerFollow}>
              <Image source={require('../../img/checkmark/checkmark.png')} style={styles.plus_icon}/>
              <Text style={styles.ButtonText}>Following</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }

  }
}
const styles = StyleSheet.create({
  plus_icon:{
    marginRight: 10,
  },
  ButtonContainer:{
    flexDirection: 'row',
    height: 40,
    width: 123,
    left: 5,
    borderWidth: .5,
    bottom: 25,
    backgroundColor: '#DADADA'
  },
  ButtonContainerFalse:{
    flexDirection: 'row',
    height: 40,
    width: 123,
    left: 5,
    borderColor: '#AFAEAE',
    borderWidth: .5,
    bottom: 25,
    backgroundColor: '#2D9CDB'
  },
  ButtonTextContainer:{
    flex: 1,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonTextContainerFollow:{
    flex: 1,
    right: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonText:{
    alignSelf: 'center',
    marginLeft: 2,
    color: '#FFFCFC',
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1
  },
})
