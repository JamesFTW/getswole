import React                                                  from 'react'
import {View, StyleSheet, ImageBackground, Text, ScrollView}  from 'react-native'
import {NativeRouter, Route, Switch,hashHistory}              from 'react-router-native'
import WorkoutScreen                                          from '../screens/WorkoutScreen.js'
import ProfileScreen                                          from '../screens/ProfileScreen.js'
import WorkoutDetails                                         from '../screens/WorkoutDetails.js'
import Navbar                                                 from '../components/navbar.js'
import Header                                                 from '../components/header.js'

const routes = () => (
  <NativeRouter history={hashHistory}>
    <View style={styles.container2}>
      <View style={styles.flexContainer}>

        <View style={styles.flexBody}/>

        <Route exact path="/" component={WorkoutScreen}/>
        <Route path="/ProfileScreen" component={ProfileScreen}/>
        <Route path="/WorkoutDetails" component={WorkoutDetails}/>
        <Navbar />
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
  }
})
export default routes
