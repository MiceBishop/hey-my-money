import React, { Component } from 'react'
import {
  Text, View, StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

export default class LossDetails extends React.Component {
  static navigationOptions = {
    title: 'Détails',
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Détails de la dette</Text>
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

LossDetails.propTypes = {
  item: PropTypes.object
}