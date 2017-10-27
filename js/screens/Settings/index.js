import React, { Component } from 'react'
import { TextInput, Text, Platform, StyleSheet } from 'react-native'
import MyButton from '~components/MyButton'
import CustomTextInput from '~components/CustomTextInput'
import colors from "~theme/colors"

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.emailEdit}>
          <CustomTextInput icon={Platform.OS === "ios" ? "ios-email" : "md-email" }  />
          <MyButton title={this.state.title} titleColor={colors.PRIMARY} color={colors.SECONDARY} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  emailEdit: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1
  }
})