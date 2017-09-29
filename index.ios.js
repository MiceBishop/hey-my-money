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
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Welcome from '~screens/Welcome'
import Home from '~screens/Home'
import Earnings from '~screens/Earnings'
import Losses from '~screens/Losses'
import Friends from '~screens/Friends'
import FriendDetails from '~screens/Friends/FriendDetails'
import LossDetails from '~screens/Losses/LossDetails'
import colors from '~theme/colors'
import EarningDetails from '~screens/Earnings/EarningDetails'

class App extends Component {
  render() {
    const { navigation } = this.props
    return(
      <View>
        <StatusBar style={{flex: 1}} backgroundColor='#01579B' />
        <HeyMyMoney />
      </View>
    )
  }
}

const DashboardNavigator = TabNavigator({
    Home: {screen: Home},
    Earnings: {screen: Earnings},
    Losses: {screen: Losses},
    Friends: {screen: Friends},
}, {
  swipeEnabled: true,
  tabBarPosition: 'top',
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
  FriendDetails: {
    screen: FriendDetails,
  },
  LossDetails: {
    screen: LossDetails,
  },
  EarningDetails: {
    screen: EarningDetails,
  },
  Dashboard: {
    screen: DashboardNavigator,
    navigationOptions: {
      title: "Sama Xaliss",
      headerStyle: {backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY,
      headerLeft: () => {
        return (
          <Icon name="ios-cog" size={24} color="white" />
        )
      }
    },
  },
})

export default App

AppRegistry.registerComponent('HeyMyMoney', () => HeyMyMoney);