import React, { Component } from 'react'
import {
    Text, StyleSheet, View, Button, Platform
} from 'react-native'

import colors from '~theme/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Accueil',
    tabBarIcon: ({ tintColor }) => {
      return(
        <Icon
          name={ Platform === 'ios' ? 'ios-home' : 'md-home' }
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
      <Text>Accueil</Text>
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