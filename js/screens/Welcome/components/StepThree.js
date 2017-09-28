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
              Boly: "Seynou ! Tu me dois pas de l'argent par hasard ?"{'\n\n'}
              Seynou: "Non Boly, je sais que tu es pauvre mais tu me le refera pas cette fois-ci, j'ai Sama Xaliss" !{'\n\n'}
              Boly: " :'( Quel flop !'"
            </Text>
        </View>
        <View style={styles.part}>
          <MyButton
            width={150}
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
    fontSize: 15,
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