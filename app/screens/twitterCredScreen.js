import React, { PureComponent } from 'react'
import { View, StyleSheet }     from 'react-native'
import { WebView }              from 'react-native-webview'
import { Redirect }             from "react-router-native"

export default class TwitterCredScreen extends PureComponent {
  webview = null
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }

  handleWebViewNavigationStateChange = newNavState => {
    //api will return url /failed for bad request
    const { url } = newNavState
    if (!url) return

    // one way to handle a successful form submit is via query strings
    if (url.includes('/success')) {
      this.setState({
        redirectToReferrer: true
      })
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/Workout" } }
    const { redirectToReferrer } = this.state

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
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   height: '100%', 
   position: 'relative', 
   zIndex: 102302302,
   marginTop: 20
  }
})