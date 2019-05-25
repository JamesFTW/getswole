import React, { Component } from 'react'

import {
  View
} from 'react-native'

export default class StatsBodyPartContainer extends Component {
  render() {
    const { children } = this.props
    
    return (
      <View>{children}</View>
    )
  }
}