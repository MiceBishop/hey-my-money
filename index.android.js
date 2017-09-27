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
  Text,
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
    const { navigation } = this.props
    return(
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={colors.BACKGROUND} />
        <HeyMyMoney />
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
    style: {
      backgroundColor: colors.BACKGROUND,
    },
    indicatorStyle: {
      backgroundColor: colors.SECONDARY
    },
    labelStyle: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    showIcon: true,
    upperCaseLabel: false,
  }
})

export const HeyMyMoney = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: { header: null }
  },
  Dashboard: {
    screen: DashboardNavigator,
    navigationOptions: {
      title: "Sama Xaliss",
      headerStyle: {backgroundColor: colors.BACKGROUND, elevation: 0 },
      headerTintColor: colors.SECONDARY
    },
  },
})

export default App

AppRegistry.registerComponent('HeyMyMoney', () => App);