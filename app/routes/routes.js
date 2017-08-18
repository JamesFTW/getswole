import React                                                  from 'react'
import {View, StyleSheet, ImageBackground, Text, ScrollView}  from 'react-native';
import {NativeRouter, Route, Switch,hashHistory}              from 'react-router-native'
import WorkoutScreen                                          from '../screens/WorkoutScreen.js'
import ProfileScreen                                          from '../screens/ProfileScreen.js'
import Navbar                                                 from '../components/navbar.js'
import Layout                                                 from '../containers/Layout.js'

const routes = () => (
  <NativeRouter history={hashHistory}>
    <View style={styles.container2}>
    <View style={styles.flexContainer}>

      {/* <View style={styles.flexHeader}>
        <ImageBackground style={styles.image} source={require('../../img/header/header.png')}>
          <Text style={styles.header}></Text>
        </ImageBackground>
      </View> */}

      <ScrollView style={styles.flexBody}>
        <View>

        </View>
      </ScrollView>

      <Route exact path="/" component={WorkoutScreen}/>
      <Route path="/ProfileScreen" component={ProfileScreen}/>
      <View style={styles.flexFooter}>
        <Navbar />
      </View>
    </View>
  </View>
  </NativeRouter>
)
const styles = StyleSheet.create({
  flexBody:{
    flex: 1,
    display: 'flex',
    backgroundColor: '#EDEDED'
  },
  container2: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0
  },
  flexContainer:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  flexFooter: {
    backgroundColor: 'red',
  },
  flexHeader:{
    height: '5%'
  },
  header:{
    zIndex: 2,
    textAlign: 'center',
    top: 11,
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Thin',
    letterSpacing: 3,
    color: '#FFFFFF',
    fontWeight: "300"
  }
})
export default routes
