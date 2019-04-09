import React, { PureComponent } from 'react'
import { View, StyleSheet }     from 'react-native'
import { WebView }              from 'react-native-webview'
import { Redirect }             from "react-router-native"

export default class TwitterCredScreen extends PureComponent {
  //Might have to open in browser instead of webview
  webview = null
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }

  handleWebViewNavigationStateChange = newNavState => {

    const { url } = newNavState;
    if (!url) return

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('/user')) {
      this.setState({
        redirectToReferrer: true
      })
      // maybe close this view?
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
      {/* <View style={styles.square}/> */}
        <WebView
          ref={ref => (this.webview = ref)}
          javaScriptEnabled={true}
          source={{ uri: 'https://swole.herokuapp.com/api/login/twitter' }}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
          onMessage={event => console.log('Received: ', event)}
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