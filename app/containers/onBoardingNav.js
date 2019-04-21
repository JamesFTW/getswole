import React, { PureComponent } from 'react'

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

const Indicator = ({ indicators }) => { 
  allIndicators = indicators.map((indicator, i) => {
    if (indicator.isComplete || indicator.component === 'userName') {
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
      indicators: '',
      userNameComplete: false,
      userPhotoComplete: false,
      text: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.text
    })

    nextProps.components.map(vals => {
      if (
        vals.component === 'profilePhoto' 
        && vals.isComplete === true
        ) {
          this.setState({
            userPhotoComplete: true
        })
      }

      if (
        vals.component === 'userName'
        && vals.isComplete === false
        ) {
        this.setState({
          userPhotoComplete: false
        })
      }
    })
  }

  render() {
    const {
      indicators,
      userPhotoComplete,
      text
    } = this.state

    const { 
      components, 
      back, 
      next, 
      submitUser 
    } = this.props

    let indicator = indicators.length > 0 ? indicators : components
    let backButton = userPhotoComplete === false ? '' : 'Back'
    let nextButton = text === '' ? '' : 'Next'
    let nextProp = userPhotoComplete === false ? next : submitUser

    if (userPhotoComplete) {
      nextButton = 'Finish'
    }
 
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => back()}>
            <Text style={styles.text}>{backButton}</Text>
          </TouchableOpacity>
          <View style={styles.indicatorContainer}>
            <Indicator indicators={indicator} />
          </View>
          <TouchableOpacity onPress={() => nextProp()}>
            <Text style={styles.text}>{nextButton}</Text>
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
    fontSize: 14,
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
    marginRight: 'auto',
    marginLeft: 'auto',
    marginLeft: 8,
    paddingBottom: 10,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1
  }
})