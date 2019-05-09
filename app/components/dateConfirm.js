import React, { PureComponent } from 'react'

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

const YES = 'Yes'
const NO  = 'No'

export default class DateConfirm extends PureComponent {
  render() {
    const { title } = this.props

    return(
      <View style={styles.container}>
        <View style={styles.dateConfirm}>
          <Text style={styles.title}>Start on {title}?</Text>
          <View style={styles.confirmationContainer}>
            <View style={styles.topSeparator} />
            <View style={styles.middleSeparator}/> 
          </View>
          <View style={styles.flexInputContainer}>
            <TouchableOpacity style={styles.textContainer}>
              <Image
                style={styles.photo}
                source={{ uri: NO }}
              />
              <Text style={styles.noText}>NO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer}>
              <Image
                style={styles.photo}
                source={{ uri: YES }}
              />
              <Text style={styles.yesText}>YES</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10
  },
  flexInputContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  dateConfirm: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1.5,
    shadowColor: '#6A5996',
    shadowOpacity: .25,
  },
  confirmationContainer: {
    width: '100%',
    height: '50%',
  },
  middleSeparator: {
    borderRightColor: '#BDBDBD',
    borderRightWidth: 1,
    width: '50%',
    height: '100%'
  },
  topSeparator: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    width: '100%',
    height: '100%'
  },
  textContainer: {
    width: '50%',
  },
  noText: {
    textAlign: 'center',
    lineHeight: 47.5,
    fontSize: 20,
    fontFamily: 'HelveticaNeue',
    color: '#F65D5D',
    fontWeight: '700',
  },
  yesText: {
    textAlign: 'center',
    lineHeight: 47.5,
    fontSize: 18,
    fontFamily: 'HelveticaNeue',
    color: '#40D4BB',
    fontWeight: '700',
  },
  title: {
    position: 'absolute',
    lineHeight: 47.5,
    height: '50%',
    fontFamily: 'HelveticaNeue',
    fontSize: 24,
    color: '#1F1C1C',
    alignSelf: 'center',
    fontWeight: '300',
  },
  photo: {
    position: 'absolute',
    marginTop: 15,
    marginLeft: 20,
    height: 18,
    width: 18
  },
})