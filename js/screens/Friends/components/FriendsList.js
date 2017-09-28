import React, { Component } from 'react'
import {
  FlatList, View, Platform
 } from 'react-native'
 import PropTypes from 'prop-types'
import Friend from './Friend.js'


export default class FriendsList extends React.PureComponent {
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
    <Friend
      /*onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}*/
      item={item}
    />
  );

  _renderSeparator() {
    return(
      <View
        style={{
          marginLeft: Platform.OS === 'android' ? 50 : 0,
          borderBottomColor: 'black',
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

FriendsList.propTypes = {
  data: PropTypes.array.isRequired
}