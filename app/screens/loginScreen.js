
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
