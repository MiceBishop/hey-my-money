import React, { Component } from 'react'
import {
    Text, View, StyleSheet, Button, Platform
} from 'react-native'

import colors from '~theme/colors'

import Icon from 'react-native-vector-icons/Ionicons';

export default class Friends extends Component {
  static navigationOptions = {
    tabBarLabel: 'Amis',
    tabBarIcon: ({ tintColor }) => {
      return(
        <Icon
          name={ Platform === 'ios' ? 'ios-people' : 'md-people' }
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
        <Text>Mes amis</Text>
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