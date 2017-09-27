/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View,
  Platform
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation'

import Welcome from '~screens/Welcome'
import Home from '~screens/Home'
import Earnings from '~screens/Earnings'
import Losses from '~screens/Losses'
import colors from '~theme/colors'

class App extends Component {
  render() {
    return(
      <View>
        <StatusBar backgroundColor={colors.BACKGROUND} />
        <App />
      </View>
    )
  }
}

const DashboardNavigator = TabNavigator({
    Home: {screen: Home},
    Earnings: {screen: Earnings},
    Losses: {screen: Losses},
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: colors.BACKGROUND,
    style: {
      padding: 10,
    },
    labelStyle: {
      fontWeight: 'bold',
    },
  },
})

const HeyMyMoney = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: { header: null }
  },
  Dashboard: {
    screen: DashboardNavigator,
    navigationOptions: {
      title: "Sama Xaliss",
      headerStyle: {backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY
    },
  },
})

AppRegistry.registerComponent('HeyMyMoney', () => HeyMyMoney);

export default DashboardNavigator