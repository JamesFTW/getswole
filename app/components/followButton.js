import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

//let data = require('../../user.json')

export default class FollowButton extends Component {
  constructor(props){
    super(props)
    this.state ={
      followers: null,
      user: null,
      following: false
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
    if(this.state.following == false){
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
    shadowColor: '#84838A',
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: .5
  },
  ButtonContainer:{
    top: 60,
    shadowColor: '#C7C7C7',
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    // height: 40,
    // width: 123,
    //left: 5,
    width: 125,
    padding: 10,
    paddingRight: 10,
    right: 3,
    marginLeft: 4,

    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#AFAEAE',
    backgroundColor: '#DADADA',


    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-end'
  },
  ButtonContainerFalse:{
    top: 60,
    // height: 40,
    // width: 123,
    //left: 5,

    width: 125,
    padding: 10,
    paddingRight: 10,
    marginLeft: 4,

    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#2D9CDB',
    backgroundColor: '#2D9CDB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    elevation: 1,
    textShadowColor: 'rgba(132,131,138,.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    fontFamily: 'HelveticaNeue',
    letterSpacing: 1
  },
})
