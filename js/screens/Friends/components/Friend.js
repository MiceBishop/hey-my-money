import React, { Component } from "react";
import { Text } from "react-native";

import FriendItem from "./FriendItem";

import PropTypes from "prop-types";
import { observer } from "mobx-react/native";

@observer
export default class Friend extends Component {
  render() {
    const { item } = this.props;
    return (
      <FriendItem
        {...this.props}
        onPress={() => this.props.onPress(item)}
        item={item}
      />
    );
  }
}

Friend.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};
