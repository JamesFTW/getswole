import React, { PureComponent } from 'react'
import CenterOfScreen from '../components/centerOfScreen'

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image
} from 'react-native'

//need to make a custom text input
const NOTEPAD = 'chooseusername'

export default class ChooseUsername extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.header}>
            <CenterOfScreen>
              <Text style={styles.text}>Choose Username</Text>
            </CenterOfScreen>
          </View>
          <View style={styles.inputContainer2}>
            <Image
              style={styles.photo}
              source={{ uri: NOTEPAD }}/>
          <TextInput
            placeholder="What's your handle?"
            placeholderTextColor='#C2BEBE'
            style={styles.input}
            onChangeText={(text) => this.setState({ text })}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%'
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 130,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: .15
  },
  header: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#40D4BB',
    height: 35,
    position: 'relative'
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#FFFFFF',
    fontWeight: '500',
    letterSpacing: 2,
    fontSize: 18
  },
  inputContainer2: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20,
    marginLeft: 10
  },
  input: {
    backgroundColor: '#E5E3E3',
    width: '100%',
    height: 28,
    borderRadius: 5,
    paddingLeft: 10,
    fontFamily: 'HelveticaNeue-Italic',
    fontWeight: '500',
    fontSize: 16,
    color: '#424242',
    marginLeft: 5
  },
  photo: {
    height: 20,
    width: 20.96,
    position: 'absolute',
    marginTop: 3,
    marginLeft: 20
  }
})