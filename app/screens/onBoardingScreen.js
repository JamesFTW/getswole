import React, { PureComponent } from 'react'
import LoginWrapper             from '../components/loginWrapper'
import CenterOfScreen           from '../components/centerOfScreen'
import ChooseProfilePhoto       from '../components/chooseProfilePhoto'
import ChooseUsername           from '../components/chooseUsername'
import OnBoardingNav            from '../containers/onBoardingNav'

import {
  StyleSheet,
  TextInput
} from 'react-native'

const components = [
  {
    component: 'userName',
    isComplete: false
  },
  {
    component: 'profilePhoto',
    isComplete: false
  }
]

const SQUATPHOTO = 'squatphoto'

export default class OnBoardingScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: components,
      username: '',
      isProfilePhoto: false,
      counter: 0
    }
  }

  back = () => {
    const { data } = this.state

    this.setState({
      counter: this.state.counter++
    })
    
    data.map((data) => {
      if (data.component !== 'userName') {

        data.isComplete = false
      }
    })

    this.setState({
      counter: this.state.counter++,
      isProfilePhoto: false
    })
  }

  nextFunc = () => {
    const { data, username } = this.state

    //force re-rerender of onBoardingNav
    this.setState({
      counter: this.state.counter++
    })
  
    if(username.length > 0) {
      data.map((data) => {
        if (data.component === 'profilePhoto') {
          //call api to see if name is taken
          data.isComplete = true
        }
      })

      this.setState({
        counter: this.state.counter++,
        isProfilePhoto: true
      })
    }
  }

  render() {
    const { data, isProfilePhoto, username } = this.state
    const defaultValue = username.length > 0 ? username : ""
    let middleElement
    
    if(!isProfilePhoto) {
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
            back={this.back} 
            components={data}
            counter={this.state.counter}
            text={this.state.username}
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