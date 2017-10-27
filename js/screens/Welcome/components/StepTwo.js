import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'

import colors from '~theme/colors.json'
import fonts from '~theme/fonts.json'

import CustomTextInput from '~components/CustomTextInput.js'
import MyButton from '~components/MyButton.js'

export default class StepTwo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pseudo: '',
      mail: '',
    }
  }

  handlePress() {
    this.props.onPageChange(2);
  }

  render() {
    return(
      <View style={styles.background}>
        <View style={styles.part}>
          <Text style={styles.quote}>Quelques informations utiles</Text>
        </View>
        <View style={styles.part}>
          <CustomTextInput
            icon={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
            placeholder="Pseudo"
          />
          <CustomTextInput
            icon={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
            keyboardType='email-address'
            placeholder="Email"
          />
        </View>
        <View style={styles.part}>
          <MyButton
            width={150}
            title="Suivant"
            color={colors.SECONDARY}
            titleColor={ Platform.OS === 'android' ? colors.BACKGROUND : colors.SECONDARY }
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
    backgroundColor: colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  background: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: 'center',
  },
  quote: {
    color: colors.SECONDARY,
    fontFamily: fonts.PRIMARY,
    fontSize: 20
  },
});