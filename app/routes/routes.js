import React                         from 'react'
import {View}                        from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import WorkoutScreen                 from '../screens/WorkoutScreen.js'
import ProfileScreen                 from '../screens/ProfileScreen.js'


const routes = () => (
  <NativeRouter>
      <Route exact path="/" component={WorkoutScreen}/>
  </NativeRouter>
)

export default routes
