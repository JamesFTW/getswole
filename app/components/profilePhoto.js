import React, { PureComponent } from 'react'

import {
  StyleSheet,
  Image
} from 'react-native'

export default class ProfilePhoto extends PureComponent {
  render() {
    const { photo } = this.props

    return (
      <Image style={styles.profilePhotoStyle} source={photo}/>
    )
  }
}

const styles = StyleSheet.create({
  profilePhotoStyle: {
    width: 80,
    height: 80,
    borderRadius: 5
  },
})
