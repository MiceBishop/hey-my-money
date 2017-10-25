import React, { Component } from "react";
import { FlatList, View, Platform } from "react-native";
import PropTypes from "prop-types";
import Earning from "./Earning.js";

export default class EarningsList extends React.PureComponent {
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Earning onPress={() => this.props.onPress(item)} item={item} />
  );

  _renderSeparator() {
    return (
      <View
        style={{
          borderBottomColor: "#BDBDBD",
          borderBottomWidth: 1
        }}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
      />
    );
  }
}

EarningsList.propTypes = {
  data: PropTypes.array.isRequired
};
