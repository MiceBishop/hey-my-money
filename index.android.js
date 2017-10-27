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
  TouchableOpacity,
  Platform
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
import EarningDetails from '~screens/Earnings/EarningDetails'
import EarningForm from "~screens/Earnings/components/EarningForm"
import Settings from "~screens/Settings";

import colors from '~theme/colors'
import CurrentItemStore from './js/mobx/currentItemStore'

class App extends Component {
  render() {
    const { navigation } = this.props
    return(
      <View style={{flex: 1}}>
        <StatusBar backgroundColor='#01579B' />
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
  tabBarOptions: {
    style: {
      backgroundColor: colors.BACKGROUND,
    },
    indicatorStyle: {
      backgroundColor: colors.SECONDARY,
      elevation: 20,
      height: 4,
      borderRadius: 1.3
    },
    labelStyle: {
      fontSize: 11,
      fontWeight: 'bold',
    },
    showIcon: true,
    upperCaseLabel: false,
  }
})

const HeyMyMoney = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: { header: null }
  },
  FriendDetails: {
    screen: FriendDetails,
    navigationOptions: {
      headerStyle: {backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY,
    }
  },
  LossDetails: {
    screen: LossDetails,
    navigationOptions: {
      headerStyle: {backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY,
    }
  },
  EarningDetails: {
    screen: EarningDetails,
    navigationOptions: {
      headerStyle: {backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY,
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Paramètres",
      headerStyle: { backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY
    }
  },
  EarningForm: {
    screen: EarningForm,
    navigationOptions: {
      title: "Ajouter un gain",
      headerStyle: { backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY
    }
  },
  Dashboard: {
    screen: DashboardNavigator,
    navigationOptions: {
      title: "Sama Xaliss",
      headerStyle: {backgroundColor: colors.BACKGROUND },
      headerTintColor: colors.SECONDARY,
      headerRight: (
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            backgroundColor: colors.BACKGROUND,
            borderRadius: 40
          }}
        >
          <Icon name={Platform.OS === "ios" ? "ios-cog" : "md-cog"} size={30} color={colors.SECONDARY} />
        </TouchableOpacity>
      )
    },
  },
})

export default App

AppRegistry.registerComponent('HeyMyMoney', () => App);