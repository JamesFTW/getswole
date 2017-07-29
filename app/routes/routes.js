import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native'

import Navbar  from '../components/navbar.js'
import Workout from '../components/Workout.js'


const routes = () => {
  <NativeRouter>
    <Route exact path="/" component={Workout}/>
  </NativeRouter>
}
