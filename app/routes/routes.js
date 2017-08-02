import React                          from 'react'
import {View}                         from 'react-native';
import { MemoryRouter, Route, Switch} from 'react-router-native'
import WorkoutScreen                  from '../screens/WorkoutScreen.js'
import ProfileScreen                  from '../screens/ProfileScreen.js'


const routes = () => (
  <MemoryRouter>
    <Switch>
      <Route exact path="/" component={WorkoutScreen}/>
      <Route path="/ProfileScreen" component={ProfileScreen}/>
    </Switch>
  </MemoryRouter>
)

export default routes
