/** @format */

import {AppRegistry}     from 'react-native'
import {name as appName} from './app.json'
import routes            from './app/routes'

AppRegistry.registerComponent(appName, () => routes)
