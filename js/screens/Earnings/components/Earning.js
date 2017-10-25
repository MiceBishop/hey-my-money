import React, { Component } from "react";
import { Text } from "react-native";

import EarningItem from "./EarningItem";

import PropTypes from "prop-types";

export default class Earning extends React.PureComponent {
  render() {
    const { item } = this.props;
    return <EarningItem {...this.props} item={item} onPress={ () => this.props.onPress(item)} />;
  }
}

Earning.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};
