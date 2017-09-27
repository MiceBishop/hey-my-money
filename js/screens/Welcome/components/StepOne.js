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
import MyButton from '~components/MyButton.js'

export default class StepOne extends Component {
  handlePress() {

    this.props.onPageChange(1);
  }

  render() {
    return(
      <View style={styles.background}>
        <View style={styles.part}>
          <Text style={styles.quote}>Bienvenue dans Sama Xaliss</Text>
        </View>
        <View style={styles.part}>
          <Image source={require('~assets/images/logo-white.png')} style={styles.logo} />
        </View>
        <View style={styles.part}>
          <MyButton
            title="Suivant"
            titleColor={ Platform.OS === 'android' ? colors.BACKGROUND : colors.SECONDARY }
            onPress={this.handlePress.bind(this)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quote: {
    color: colors.SECONDARY,
    fontFamily: fonts.PRIMARY,
    fontSize: 20
  },
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