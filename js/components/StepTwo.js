import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

import CustomTextInput from './CustomTextInput.js'

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
          <Text>Quelques informations utiles</Text>
        </View>
        <View style={styles.part}>
          <CustomTextInput
            icon='account-circle'
          />
          <CustomTextInput
            icon='email'
          />
        </View>
        <View style={styles.part}>
          <Button
            title="Suivant"
            color="#841584"
            onPress={this.handlePress}
            style={styles.nextButton}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  part: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: 'center',
  },
});