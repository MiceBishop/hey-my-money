import React, { Component } from 'react'
import {
    Text, View, StyleSheet, Button, Platform
} from 'react-native'

import colors from '~theme/colors'

import Icon from 'react-native-vector-icons/Ionicons';

export default class Earnings extends Component {
  static navigationOptions = {
    tabBarLabel: 'Mes gains',
    tabBarIcon: ({ tintColor }) => {
      return(
        <Icon
          name={ Platform.OS === 'ios' ? 'ios-cash' : 'md-cash' }
          size={25}
          color={ tintColor }
        />
      )
    }
  }
  handlePress() {

  }
  render() {
    return(
      <View style={styles.home}>
        <Text>Mes Gains</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})