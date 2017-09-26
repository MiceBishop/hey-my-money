import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  Platform,
  StyleSheet
} from 'react-native'

import colors from '~theme/colors.json'
import MyButton from './MyButton.js'

export default class StepOne extends Component {
  handlePress() {

  }

  render() {
    return(
      <View style={styles.background}>
        <View style={styles.part}>
          <Text style={{color: colors.SECONDARY}}>Bienvenue</Text>
        </View>
        <View style={styles.part}>
          <Image source={require('../../assets/images/logo-white.png')} style={styles.logo} />
        </View>
        <View style={styles.part}>
          <MyButton
            title="Suivant"
            onPress={this.handlePress}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  part: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    justifyContent: 'center',
  },
  logo: {
    height: 190,
    width: 200,
  },
});