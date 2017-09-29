import React, { Component } from 'react'
import {
  FlatList, View, Platform
 } from 'react-native'
import PropTypes from 'prop-types'
import Earning from './Earning.js'


export default class EarningsList extends React.PureComponent {
  // state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  // _onPressItem = (id: string) => {
  //   // updater functions are preferred for transactional updates
  //   this.setState((state) => {
  //     // copy the map rather than modifying state.
  //     const selected = new Map(state.selected);
  //     selected.set(id, !selected.get(id)); // toggle
  //     return {selected};
  //   });
  // };

  _renderItem = ({item}) => (
    <Earning
      {...this.props}
      /*selected={!!this.state.selected.get(item.id)}*/
      item={item}
    />
  );

  _renderSeparator() {
    return(
      <View
        style={{
          borderBottomColor: '#BDBDBD',
          borderBottomWidth: 1,
        }}
      />
    )
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
}