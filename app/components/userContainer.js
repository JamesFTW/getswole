import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class UserContainer extends PureComponent {

  render() {
    const { children } = this.props

    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 40,
    borderRadius: 1,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#BFBFBF',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15
  },
})
