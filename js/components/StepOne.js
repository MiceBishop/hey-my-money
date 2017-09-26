import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native'

export default class StepOne extends Component {
  handlePress() {

  }

  render() {
    return(
      <View style={styles.background}>
        <View style={styles.part}>
          <Text>Welcome</Text>
        </View>
        <View style={styles.part}>
          <Image source={require('../../assets/images/logo-hey-my-money.png')} style={styles.logo} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: 'center',
  },
  logo: {
    height: 190,
    width: 200,
  }
});