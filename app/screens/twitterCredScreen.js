import React, { PureComponent } from 'react'
import { Redirect } from "react-router-native"
import { WebView }  from 'react-native-webview'
import Loading      from '../components/loading'

import {
  View,
  StyleSheet
} from 'react-native'

export default class TwitterCredScreen extends PureComponent {
  webview = null
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false,
      isLoading: true
    }
  }

  componentDidMount() {

  }

  handleWebViewNavigationStateChange = newNavState => {
    //api will return url /failed for bad request
    const { url } = newNavState
    if (!url) return

    // one way to handle a successful form submit is via query strings
    if (url.includes('/success')) {
      this.webview.stopLoading()
      this.setState({
        redirectToReferrer: true
      })
    }
  }

  stopSpinner = () => {
    this.setState({
      isLoading: false
    })
  }

  render() {
    const { from } = this.props.location.state 
      || { from: { pathname: "/Onboarding" } } 
      || { from: { pathname: "/Workout" } }

    const { redirectToReferrer, isLoading } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from}/>
    }

    return (
      <View style={styles.container}>
        <WebView
          ref={ref => (this.webview = ref)}
          javaScriptEnabled={true}
          source={{ uri: 'https://swole.herokuapp.com/api/login/twitter' }}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
          onLoadEnd={() => this.stopSpinner()}
        />
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