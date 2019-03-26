
import React, { PureComponent } from 'react'
import LoginWrapper             from '../components/loginWrapper.js'
import CenterOfScreen           from '../components/centerOfScreen.js'
import TwitterFollowButton      from '../components/twitterFollowButton.js'
import SwoleLoginLogo           from '../components/swoleLoginLogo.js'

export default class LoginScreen extends PureComponent {
  componentDidMount() {
    console.log('test')
    //fetch API to check if person already logged in via asyncstorage
  }
  twitterLogin = () => {
    fetch('https://swole.herokuapp.com/api/login/twitter')
      .then(res => console.log(res.url))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <LoginWrapper>
        <CenterOfScreen>
          <SwoleLoginLogo/>
        </CenterOfScreen>
        <TwitterFollowButton login={this.twitterLogin()} />  
      </LoginWrapper>
    )
  }
}
