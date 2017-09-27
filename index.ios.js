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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { StackNavigator, DrawerNavigator } from 'react-navigation'

import MyButton from '~components/MyButton'
import Welcome from '~screens/Welcome'
import Transacs from '~screens/Transacs'
import Friends from '~screens/Friends'
import colors from '~theme/colors'

class MainScreen extends Component {
  toggleIt() {
       const { navigation } = this.props
       navigate('DrawerOpen') 
    }

    componentDidMount() {
      this.props.navigation.setParams({ handleToggle: this.toggleIt });
    }
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