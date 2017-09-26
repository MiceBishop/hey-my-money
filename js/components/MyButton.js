import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableNativeFeedback,
  Text,
  View,
  Button,
  Platform,
  StyleSheet
} from 'react-native'
import colors from '~theme/colors.json'

export default class MyButton extends Component {

  render() {
    return(
        Platform.OS === 'android' ?
        <View style={styles.container}>
          <TouchableNativeFeedback
            {...this.props}
            background={TouchableNativeFeedback.Ripple('#BDBDBD', false)}>
            <View style={styles.button}>
              <Text style={styles.text}>{this.props.title}</Text>
            </View>
          </TouchableNativeFeedback>
        </View> :
        <Button
          {...this.props}
          title={this.props.title}
          color={colors.SECONDARY}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: 'white'
  },
  text: {
    fontWeight: 'bold',
    color: colors.BACKGROUND
  },
  button: {
    backgroundColor: colors.SECONDARY,
    height: 50,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

MyButton.propTypes = {
  title: PropTypes.string.isRequired
};