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
import { RaisedTextButton } from 'react-native-material-buttons'
import { MaterialIcons } from 'react-native-vector-icons'

export default class MyButton extends Component {

  render() {
    return(
        Platform.OS === 'android' ?
        <RaisedTextButton
          titleColor={this.props.titleColor}
          title={this.props.title}
          {...this.props}
        /> :
        <Button
          {...this.props}
          title={this.props.title}
          color={this.props.titleColor}
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
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired
};