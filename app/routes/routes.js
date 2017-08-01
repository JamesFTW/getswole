import React                          from 'react'
import {View}                         from 'react-native';
import { NativeRouter, Route, Switch} from 'react-router-native'
import WorkoutScreen                  from '../screens/WorkoutScreen.js'
import ProfileScreen                  from '../screens/ProfileScreen.js'


const routes = () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={WorkoutScreen}/>
      <Route path="/ProfileScreen" component={ProfileScreen}/>
    </Switch>
  </NativeRouter>
)

export default routes
