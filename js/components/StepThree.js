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
import fonts from '~theme/fonts.json'
import MyButton from './MyButton.js'

export default class StepThree extends Component {
  handlePress() {
    // this.props.onPageChange(3);
  }

  render() {
    return(
      <View style={styles.background}>
        <View style={styles.part}>
          <Text style={styles.quote}>Allons-y !</Text>
        </View>
        <View style={styles.part}>
          <Image source={require('../../assets/images/logo-white.png')} style={styles.logo} />
          <Text style={styles.quote}>
              Économisez votre mémoire et bye bye les désaccords en enregistrant tous vos créances et dettes.{'\n'}Surveillez
              votre solde à tout moment !
            </Text>
        </View>
        <View style={styles.part}>
          <MyButton
            title="Commencer"
            onPress={this.handlePress.bind(this)}
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
    padding: 10
  },
  quote: {
    color: colors.SECONDARY,
    fontFamily: fonts.PRIMARY,
    fontSize: 20
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