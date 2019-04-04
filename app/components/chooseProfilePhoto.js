import React, { PureComponent } from 'react'
import CenterOfScreen from '../components/centerOfScreen'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class ChooseProfilePhoto extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: ''
    }
  }

  // componentDidMount() {
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       const source = { uri: response.uri };

  //       // You can also display the image using data:
  //       // const source = { uri: 'data:image/jpeg;base64,' + response.data };

  //       this.setState({
  //         avatarSource: source,
  //       });
  //     }
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.header}>
            <CenterOfScreen>
              <Text style={styles.text}>Choose Profile Photo</Text>
            </CenterOfScreen>
          </View>
            <CenterOfScreen>
              <Image style={styles.profilePhoto} source={require('../assets/img/me.jpg')}/>
              <TouchableOpacity>
                <Image style={styles.addIcon} source={{uri: 'Group'}}/>
              </TouchableOpacity>
            </CenterOfScreen> 
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
    height: 256,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: .15,
    marginBottom: 50
  },
  header: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#40D4BB',
    height: 35,
    position: 'absolute'
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#FFFFFF',
    fontWeight: '500',
    letterSpacing: 2,
    fontSize: 18
  },
  profilePhoto: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginTop: 40
  },
  addIcon: {
    height: 30.15,
    width: 37.96,
    marginTop: 10
  },
  imageContent: {
    marginTop: 10,
    display: 'flex'
  }
})