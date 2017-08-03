import React                                      from 'react'
import {View}                                     from 'react-native';
import {NativeRouter, Route, Switch,hashHistory}  from 'react-router-native'
import WorkoutScreen                              from '../screens/WorkoutScreen.js'
import ProfileScreen                              from '../screens/ProfileScreen.js'
import Navbar                                     from '../components/navbar.js'

const routes = () => (
  <NativeRouter history={hashHistory}>
    <Switch>
      <Route exact path="/" component={WorkoutScreen} overlayComponent={Navbar}/>
      <Route path="/ProfileScreen" component={ProfileScreen} overlayComponent={Navbar}/>
    </Switch>
  </NativeRouter>
)

export default routes
