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
  const allIndicators = indicators.map((indicator, i) => {
    if (indicator.isComplete) {
      return <View key={i} style={styles.indicatorActive} />
    } else {
      return <View key={i} style={styles.indicatorUnactive} />
    }
  })

  return (
    <View style={styles.indicatorContainer}>
      { allIndicators }
    </View>
  )
}

export default class OnBoardingNav extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      indicators: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      indicators: nextProps.components
    })
  }

  render() {
    const { components, back, next } = this.props
    const { indicators } = this.state
    const indicator = indicators.length > 0 ? indicators : components
    
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => back()}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
          <View style={styles.indicatorContainer}>
            <Indicator indicators={indicator} />
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
  indicatorActive: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#40D4BB',
    marginRight: 10
  },
  indicatorUnactive: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#E5E3E3',
    marginRight: 10
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10
  }
})