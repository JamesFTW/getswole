
import React, { PureComponent }    from 'react'
import LoginWrapper                from '../components/loginWrapper.js'
import CenterOfScreen              from '../components/centerOfScreen.js'
import TwitterLoginButton          from '../components/twitterLoginButton.js'
import SwoleLoginLogo              from '../components/swoleLoginLogo.js'
import Loading                     from '../components/loading'
import { getUserFromCache }        from '../api'
import { Redirect }                from "react-router-native"
import { AsyncStorage } from 'react-native'

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

  componentDidMount() {
    getUserFromCache()
      .then(data => {
        this.setState({
          user: data.userid,
          redirectToWorkoutScreen: true,
          isLoading: false 
        })
      })
      .catch(_ => {
        this.setState({
          isLoading: false
        })
      })
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
