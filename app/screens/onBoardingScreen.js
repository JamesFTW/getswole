import React, { Component } from 'react'
import LoginWrapper         from '../components/loginWrapper'
import CenterOfScreen       from '../components/centerOfScreen'
import ChooseProfilePhoto   from '../components/chooseProfilePhoto'
import ChooseUsername       from '../components/chooseUsername'
import Loading              from '../components/loading'
import OnBoardingNav        from '../containers/onBoardingNav'
import { Redirect }         from "react-router-native"

import {
  getUserSession,
  getUserFromCache,
  registerUser,
  getUser 
} from '../api'

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

export default class OnBoardingScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: components,
      username: '',
      isProfilePhoto: false,
      profilePhoto: '',
      shouldRedirect: false,
      isLoading: true
    }
  }

  componentDidMount() {
    //Need to check if user exist
    getUserSession()
      .then(res => {
        const userPhoto = res.user.profilePhoto

        this.setState({
          profilePhoto: userPhoto,
          isLoading: false
        })
      })
      .catch(err => console.log(err))
  }

  backFunc = () => {
    const { data } = this.state

    data.map((data) => {
      if (data.component !== 'userName') {
        data.isComplete = false
      }
    })

    this.setState({
      isProfilePhoto: false
    })
  }

  nextFunc = () => {
    const { data, username } = this.state
  
    if (username.length > 0) {
      data.map((data) => {
        if (data.component === 'profilePhoto') {
          //call api to see if name is taken
          data.isComplete = true
        }
      })

      this.setState({
        isProfilePhoto: true
      })
    }
  }

  submit = () => {
    const { username, profilePhoto } = this.state

    registerUser(username, profilePhoto)
      .then(_ => {
        this.setState({
          shouldRedirect: true
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { 
      data, 
      isProfilePhoto, 
      username ,
      profilePhoto,
      shouldRedirect,
      isLoading
    } = this.state

    if (isLoading) {
      return <Loading />
    }

    if (shouldRedirect) {
      return <Redirect to='/Workout'/>
    }

    let defaultValue = username.length > 0 ? username : ""
    let middleElement
  
    if (!isProfilePhoto) {
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
      middleElement = <ChooseProfilePhoto profilePhoto={profilePhoto}/>
    }
    
    return (
      <LoginWrapper photo={SQUATPHOTO}>
        <CenterOfScreen>
          { middleElement } 
          <OnBoardingNav 
            next={this.nextFunc}
            submitUser={this.submit}
            back={this.backFunc}
            components={data}
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
    marginBottom: 10,
    borderColor: '#C9C9C9',
    borderWidth: 1
  }
})