
import React                                from 'react'
import { NativeRouter, Route, hashHistory } from 'react-router-native'
import WorkoutScreen                        from '../screens/workoutScreen.js'
import ProfileScreen                        from '../screens/profileScreen.js'
import WorkoutDetails                       from '../screens/workoutDetails.js'
import WorkoutSelectScreen                  from '../screens/workoutSelectScreen.js'
import LoginScreen                          from '../screens/loginScreen.js'
import Navbar                               from '../components/navBar.js'
import SelectDateScreen                     from '../screens/selectDateScreen.js'
import TwitterCredScreen                    from '../screens/twitterCredScreen.js'
import OnBoardingScreen                     from '../screens/onBoardingScreen.js'
import store                                from '../store/store.js'
import { Provider }                         from 'react-redux'

import {
  View,
  StyleSheet
} from 'react-native'

const routes = () => (
  <Provider store={store}>
    <NativeRouter history={hashHistory}>
      <View style={styles.container2}>
        <View style={styles.flexContainer}>

          <View style={styles.flexBody}/>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/TwitterCreds" component={TwitterCredScreen} />
          <Route exact path="/Onboarding" component={OnBoardingScreen} />
          <Route exact path="/Workout" component={WorkoutScreen} />
          <Route exact path="/WorkoutSelect" component={WorkoutSelectScreen} />
          <Route path="/ProfileScreen" component={ProfileScreen}/>
          <Route path="/WorkoutDetails/:id" component={WorkoutDetails}/>
          <Navbar />
        </View>
      </View>
    </NativeRouter>
  </Provider>
)
const styles = StyleSheet.create({
  flexContainer:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
})
export default routes
