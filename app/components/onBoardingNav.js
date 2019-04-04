import React, { PureComponent } from 'react'

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

//need to change styles for buttons
  //grey if info hasn't been filled out.  green if it has.

//hide skip button during chooseusername component.

const Indicator = ({ indicators }) => {
  const allIndicators = indicators.map((indicator, i) => (
    <View key={i} style={styles.indicator} />
  ))

  return (
    <View style={styles.indicatorContainer}>
      { allIndicators }
    </View>
  )
}

export default class OnBoardingNav extends PureComponent {
  render() {
    const { components, isSkipable, skip, next } = this.props
    
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => skip()}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.indicatorContainer}>
            <Indicator indicators={components} />
          </View>
          <TouchableOpacity onPress={() => next()}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  },
  nav: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingLeft: 25,
    paddingRight: 25,
    height: 77,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 14
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#40D4BB',
    marginRight: 10
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10
  }
})