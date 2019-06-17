
import React                from 'react'
import { Provider }         from 'react-redux'
import store                from '../store/store.js'
import Navbar               from '../components/navBar.js'
import ProfileScreen        from '../screens/profileScreen.js'
import WorkoutDetails       from '../screens/workoutDetails.js'
import WorkoutSelectScreen  from '../screens/workoutSelectScreen.js'
import LoginScreen          from '../screens/loginScreen.js'
import SelectDateScreen     from '../screens/selectDateScreen.js'
import TwitterCredScreen    from '../screens/twitterCredScreen.js'
import OnBoardingScreen     from '../screens/onBoardingScreen.js'
import StatsScreen          from '../screens/statsScreen.js'
import ExerciseTotalsScreen from '../screens/exerciseTotalsScreen.js'
import WorkoutScreen        from '../screens/workoutScreen.js'

import {
  NativeRouter,
  Route,
  hashHistory
} from 'react-router-native'

import {
  View,
  StyleSheet
} from 'react-native'

const routes = () => (
  <Provider store={store}>
    <NativeRouter history={hashHistory}>
      <View style={styles.flexContainer}>
        <Route exact path="/" component={WorkoutSwitchScreen} />
        <Route exact path="/TwitterCreds" component={TwitterCredScreen} />
        <Route exact path="/Onboarding" component={OnBoardingScreen} />
        <Route exact path="/Workout" component={WorkoutContainer} />

        <Route exact path="/WorkoutSelect" component={WorkoutSelectScreen} />
        <Route path="/WorkoutSelect/SelectDateScreen/:id" component={SelectDateScreen} />

        <Route exact path="/ProfileScreen" component={ProfileScreen} />
        <Route path="/ProfileScreen/WorkoutDetails/:id" component={WorkoutDetails} />

        <Route exact path="/StatsScreen" component={StatsScreen} />
        <Route path="/StatsScreen/BodyPart/:id" component={ExerciseTotalsScreen} />
        <Navbar />
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
