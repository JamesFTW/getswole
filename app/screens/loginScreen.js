
import React, { PureComponent } from 'react'
import LoginWrapper             from '../components/loginWrapper.js'
import CenterOfScreen           from '../components/centerOfScreen.js'
import TwitterLoginButton       from '../components/twitterLoginButton.js'
import SwoleLoginLogo           from '../components/swoleLoginLogo.js'

export default class LoginScreen extends PureComponent {
  constructor(props) {
    super(props)
    SQUATPHOTO = 'squatphoto'
  }

  render() {
    return (
      <LoginWrapper photo={SQUATPHOTO}>
        <CenterOfScreen>
          <SwoleLoginLogo/>
        </CenterOfScreen>
        <TwitterLoginButton/>
      </LoginWrapper>
    )
  }
}
