import React, { Component } from 'react'
import {
  Text, View, StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

export default class FriendDetails extends React.Component {
  static navigationOptions = {
    title: 'Détails',
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Détails de l'utilisateur</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

FriendDetails.propTypes = {
  item: PropTypes.object
}