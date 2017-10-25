import React, { Component } from 'react'
import {
    Text
} from 'react-native'

import LossItem from './LossItem'

import PropTypes from 'prop-types'

export default class Loss extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <LossItem {...this.props} item={item} onPress={ () => this.props.onPress(item)} />
    )
  }
}

Loss.propTypes = {
    item: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
}