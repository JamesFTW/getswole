
import React, { PureComponent } from 'react'
import LoginWrapper   from '../components/loginWrapper.js'
import CenterOfScreen from '../components/centerOfScreen.js'
import TwitterFollowButton from '../components/twitterFollowButton.js'
import SwoleLoginLogo from '../components/swoleLoginLogo.js'

import {
  Text,
  StyleSheet,
  Image,
  View
} from 'react-native'

const DUMBBELL = 'loginIcon'

export default class LoginScreen extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <CenterOfScreen>
          <SwoleLoginLogo/>
        </CenterOfScreen>
        <TwitterFollowButton />  
      </LoginWrapper>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Bold',
    letterSpacing: 6,
    color: '#FFFFFF',
    fontWeight: '700'
  },
  checkIcon: {
    height: 96/1.5,
    width: 111/1.5,
    marginBottom: 20,
    position: 'relative'
  }
})
