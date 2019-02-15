import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

const PLUS = 'plus'
const CHECKMARK = 'checkmark'

class FollowButton extends Component {

  onFollow = () => {
    const { toggleFollow } = this.props
    toggleFollow()
  }

  render() {
    const { isFollowing } = this.props

    if(isFollowing) {
      return (
        <TouchableHighlight 
          underlayColor="rgba(0, 0, 0, 0)" 
          onPress={this.onFollow}>
          <View style={styles.containerFalse}>
            <View style={styles.ButtonTextContainerFalse}>
              <Image source={{uri: CHECKMARK}} style={styles.checkIcon}/>
              <Text style={styles.ButtonText}>Following</Text>
            </View>
          </View>
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight 
          underlayColor="rgba(0, 0, 0, 0)" 
          onPress={this.onFollow}>
          <View style={styles.containerTrue}>
            <View style={styles.ButtonTextContainerTrue}>
              <Image source={{uri: PLUS}} style={styles.plusIcon}/>
              <Text style={styles.ButtonText}>Follow</Text>
            </View>
          </View>
        </TouchableHighlight>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.followReducer
}


const ConnectedNode = connect(mapStateToProps, actions)(FollowButton)

const styles = StyleSheet.create({
  containerTrue: {
    top: 60,
    shadowColor: '#C7C7C7',
    shadowOffset: { width: 1.5, height: 2.5},
    shadowOpacity: 1,
    shadowRadius: 1,

    width: 125,
    padding: 10,
    paddingRight: 10,
    marginLeft: 4,

    borderColor: '#AFAEAE',
    backgroundColor: '#DADADA',


    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonTextContainerTrue: {
    flex: 1,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkIcon: {
    marginRight: 10,
    shadowColor: '#84838A',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: .5,
    height: 10,
    width: 15
  },
  plusIcon: {
    marginRight: 15,
    shadowColor: '#84838A',
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: .5,
    height: 15,
    width: 15
  },
  ButtonText: {
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
  containerFalse: {
    top: 60,

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
  ButtonTextContainerFalse: {
    flex: 1,
    right: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default ConnectedNode