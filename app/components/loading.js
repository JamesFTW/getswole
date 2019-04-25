import React, { Component } from 'react'
import {
  ActivityIndicator
} from 'react-native'

import CenterOfScreen from '../components/centerOfScreen.js'
import LoginWrapper from '../components/loginWrapper.js'

export default class Loading extends Component {
  constructor(props) {
    super(props)
    SQUATPHOTO = 'squatphoto'
  }
  render() {
    return (
      <LoginWrapper photo={SQUATPHOTO}>
        <CenterOfScreen>
          <ActivityIndicator size="large" color="white" />
        </CenterOfScreen>
      </LoginWrapper>
    )
  }
}