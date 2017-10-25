import React, { Component } from 'react'
import {
  Text, View, StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

export default class EarningDetails extends React.Component {
  static navigationOptions = {
    title: 'Détails',
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Détails du gain de {this.props.navigation.state.params.item.name}</Text>
        <Text>{this.props.navigation.state.params.item.description}</Text>
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

EarningDetails.propTypes = {
  item: PropTypes.object
}