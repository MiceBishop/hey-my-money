import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableNativeFeedback,
  Text,
  View,
  Button,
  Platform,
} from 'react-native'
import colors from '~theme/colors.json'
import { TextButton } from 'react-native-material-buttons'
import { MaterialIcons } from 'react-native-vector-icons'

export default class MyButton extends Component {

  render() {
    return(
        Platform.OS === 'android' ?
        <TextButton
          titleColor={this.props.titleColor}
          title={this.props.title}
          color={this.props.color}
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

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};