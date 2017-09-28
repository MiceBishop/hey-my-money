import React, { Component } from 'react'
import {
    Text
} from 'react-native'

import FriendItem from './FriendItem'

import PropTypes from 'prop-types'

export default class Friend extends React.PureComponent {
//   _onPress = () => {
//     this.props.onPressItem(this.props.id);
//   };

  render() {
    const { item } = this.props;
    return (
      <FriendItem item={item} />
    )
  }
}

Friend.propTypes = {
    item: PropTypes.object.isRequired
}