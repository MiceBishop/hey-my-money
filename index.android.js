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

import Welcome from './js/screens/Welcome.js'

export default class HeyMyMoney extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('HeyMyMoney', () => HeyMyMoney);
