
import React, { PureComponent } from 'react'
import LoginWrapper             from '../components/loginWrapper.js'
import CenterOfScreen           from '../components/centerOfScreen.js'
import TwitterLoginButton       from '../components/twitterLoginButton.js'
import SwoleLoginLogo           from '../components/swoleLoginLogo.js'
import Loading                  from '../components/loading'
import { getUserFromCache }     from '../api'
import { Redirect }             from "react-router-native"

export default class LoginScreen extends PureComponent {
  constructor(props) {
    SQUATPHOTO = 'squatphoto'
    super(props)
    this.state = {
      user: '',
      redirectToWorkoutScreen: false,
      isLoading: true
    }
  }

  async componentDidMount() {
    try {
      let userFromCache = await getUserFromCache()

      userFromCache === null ?
        this.setState({ isLoading: false }) :
        this.setState({
          user: userFromCache.userid,
          redirectToWorkoutScreen: true,
          isLoading: false
        })

    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const {
      redirectToWorkoutScreen,
      user,
      isLoading
    } = this.state

    if (isLoading) {
      return <Loading />
    }

    if (redirectToWorkoutScreen) {
      return (
        <Redirect to={{
          pathname: '/Workout',
          state: {
            user
          }
        }} />
      )
    }

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
