import React, { Component } from 'react'
import {
    Text, StyleSheet, View, Button, Platform
} from 'react-native'

import colors from '~theme/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Losses extends Component {
  static navigationOptions = {
    tabBarLabel: 'Mes dettes',
    tabBarIcon: ({ tintColor }) => {
      return(
        <Icon
          name={ Platform.OS === 'ios' ? 'ios-trending-up' : 'md-trending-up' }
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
      <Text>Mes dettes</Text>
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