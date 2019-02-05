import React, { PureComponent } from 'react'
import { NativeRouter, Link }   from 'react-router-native'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import homeIcon    from '../assets/img/home/Home.png'
import barbellIcon from '../assets/img/workout/Vector.png'
import userIcon    from '../assets/img/user/noun.png'

export default class Navbar extends PureComponent {
  render() {
    return (
      <View style={styles.navRectangle}>
        <TouchableOpacity>
          <Image style={{ marginLeft: 20 }} source={homeIcon} />
        </TouchableOpacity>
        <Link
          to='/'
          component={TouchableOpacity}
          >
          <Image source={barbellIcon} style={{ marginRight: 10}} />
        </Link>
        <Link
          to='/ProfileScreen'
          component={TouchableOpacity}
          >
          <Image style={{ marginRight: 20}} source={userIcon} />
        </Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navRectangle: {
    backgroundColor: '#E5E5E5',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#C2C2C2',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
})
