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

export default class StepThree extends Component {
  render() {
    return(
      <View style={styles.background}>
        <View style={styles.part}>
          <Text style={styles.quote}>Allons-y !</Text>
        </View>
        <View style={styles.part}>
          <Image source={require('~assets/images/logo-white.png')} style={styles.logo} />
          <Text style={styles.quote}>
              Qui me doit de l'argent ?{"\n"}
              À qui dois-tu de l'argent ?{"\n"}
              Ne vous cassez plus la tête !{"\n"}
              Avec Sama Xaliss, votre smartphone devient votre portefeuille !{"\n"}
          </Text>
        </View>
        <View style={styles.part}>
          <MyButton
            style={{ width: 150 }}
            title="Commencer"
            color={colors.SECONDARY}
            titleColor={ Platform.OS === 'android' ? colors.BACKGROUND : colors.SECONDARY }
            onPress={this.props.onPageChange}
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
    fontSize: 20,
    textAlign: 'center',
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