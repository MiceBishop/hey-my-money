import React, { Component } from 'react'
import {
    Text
} from 'react-native'

import EarningItem from './EarningItem'

import PropTypes from 'prop-types'

export default class Earning extends React.PureComponent {
  
//   _onPress = () => {
//     this.props.onPressItem(this.props.id);
//   };

  render() {
    const { item } = this.props;
    return (
      <EarningItem {...this.props} item={item} />
    )
  }
}

Earning.propTypes = {
    item: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
}