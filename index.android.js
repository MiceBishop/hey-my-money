/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Welcome from '~screens/Welcome'
import Transacs from '~screens/Transacs'
import Friends from '~screens/Friends'

class MainScreen extends Component {
  static ;
  render() {
    const { navigation } = this.props
    return (
      <Welcome navigation={ navigation }/>
    );
  }
}

const Drawer = DrawerNavigator(
  {
    Transacs: {
      path: "/",
      screen: Transacs
    },
    Friends: {
      path: "/sent",
      screen: Friends
    },
  },
    {
      initialRouteName: 'Transacs',
      drawerPosition: 'left'
    }
)

const HeyMyMoney = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: { title: 'Welcome', header: null }
  },
  Transacs: {
    screen: Drawer,
    navigationOptions: { title: 'Sama Xaliss' }
  },

})

AppRegistry.registerComponent('HeyMyMoney', () => HeyMyMoney);

export default HeyMyMoney