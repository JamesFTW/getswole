import React, { PureComponent } from 'react'
import LoginWrapper             from '../components/loginWrapper'
import CenterOfScreen           from '../components/centerOfScreen'
import ChooseProfilePhoto       from '../components/chooseProfilePhoto'
import ChooseUsername           from '../components/chooseUsername'
import OnBoardingNav            from '../components/onBoardingNav'

import {
  StyleSheet,
  TextInput
} from 'react-native'

const tester = [
  {
    component: <ChooseUsername />,
    isComplete: false
  },
  {
    component: <ChooseProfilePhoto />,
    isComplete: false
  }
]

const SQUATPHOTO = 'squatphoto'

export default class OnBoardingScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: tester,
      username: '',
      isUser: true
    }
  }

  test = () => {
    this.setState({
      isUser: !this.state.isUser
    })
  }

  nextFunc = () => {
    this.setState({
      isUser: !this.state.isUser
    })
  }

  render() {
    const { data, isUser, username } = this.state
    const defaultValue = username.length > 0 ? username : ""
    
    let middleElement
    
    if(isUser) {
      middleElement = (
        <ChooseUsername>
          <TextInput
            placeholder="What's your handle?"
            defaultValue={defaultValue}
            placeholderTextColor='#C2BEBE'
            style={styles.input}
            onChangeText={(username) => this.setState({ username })}
          />
        </ChooseUsername>
      )
    } else {
      middleElement = <ChooseProfilePhoto/>
    }
    
    return (
      <LoginWrapper photo={SQUATPHOTO}>
        <CenterOfScreen>
          { middleElement } 
          <OnBoardingNav 
          next={this.nextFunc} 
          skip={this.test} 
          components={data}
          />
        </CenterOfScreen>
      </LoginWrapper>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#E5E3E3',
    width: '100%',
    height: '100%',
    height: 28,
    borderRadius: 5,
    paddingLeft: 10,
    fontFamily: 'HelveticaNeue-Italic',
    fontWeight: '500',
    fontSize: 16,
    color: '#424242',
    marginLeft: 10,
    marginBottom: 10
  }
})