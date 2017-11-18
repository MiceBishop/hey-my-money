import React, { Component } from 'react'
import { View, TextInput, Text, Platform, StyleSheet } from 'react-native'
import MyButton from '~components/MyButton'
import CustomTextInput from '~components/CustomTextInput'
import colors from "~theme/colors"

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})