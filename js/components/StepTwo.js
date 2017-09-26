import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import colors from '~theme/colors.json'

import CustomTextInput from './CustomTextInput.js'
import MyButton from './MyButton.js'

export default class StepTwo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pseudo: '',
      mail: '',
    }
  }

  handlePress() {

  }

  render() {
    return(
      <View style={styles.background}>
        <View style={styles.part}>
          <Text style={{color: colors.SECONDARY}}>Quelques informations utiles</Text>
        </View>
        <View style={styles.part}>
          <CustomTextInput
            icon='account-circle'
            placeholder="Pseudo"
          />
          <CustomTextInput
            icon='email'
            keyboardType='email-address'
            placeholder="Email"
          />
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
    backgroundColor: colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: 'center',
  },
});