import React, { PureComponent } from 'react'
import { Redirect } from "react-router-native"
import { WebView }  from 'react-native-webview'
import Loading      from '../components/loading'
import { getUser }  from '../api'
import { API_ENDPOINT } from '../api/endpoint'

import {
  View,
  StyleSheet
} from 'react-native'

export default class TwitterCredScreen extends PureComponent {
  webview = null
  constructor(props) {
    super(props)
    this.state = {
      redirectToOnBoarding: false,
      redirectToWorkoutScreen: false,
      isLoading: true,
      isUser: false,
      showWebView: false,
      user: ''
    }
  }

  componentDidMount() {
    getUser()
      .then(data => {
        //TODO:  API needs to query database for user info and return id
       if (data.user.id) {
         this.setState({
           showWebView: true
         })
       } else {
        this.setState({
          user: data.user.id,
          redirectToWorkoutScreen: true
        })
       }
    })
    .catch(err => console.log(err))
  }

  handleWebViewNavigationStateChange = newNavState => {
    //api will return url /failed for bad request
    const { url } = newNavState
    if (!url) return

    if (url.includes('/success')) {
      this.webview.stopLoading()
      this.setState({
        redirectToOnBoarding: true
      })
    }
  }

  stopSpinner = () => {
    this.setState({
      isLoading: false
    })
  }

  render() {
    const {
      redirectToWorkoutScreen,
      redirectToOnBoarding,
      isLoading,
      showWebView,
      user
    } = this.state

    if (redirectToOnBoarding) {
      return <Redirect to='/OnBoarding'/>
    }

    if (redirectToWorkoutScreen) {
      return (
        <Redirect to={{
          pathname: '/Workout',
          state: {
            user
          }
        }}/>
      )
    }

    return (
      <View style={styles.container}>
        {showWebView? <WebView
          ref={ref => (this.webview = ref)}
          javaScriptEnabled={true}
          source={{ uri: `${API_ENDPOINT}/login/twitter` }}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
          onLoadEnd={() => this.stopSpinner()}
        /> : <Loading/>}
        {isLoading && (
          <Loading/>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   height: '100%', 
   position: 'relative', 
   zIndex: 100
  }
})