import React, { Component } from "react";
import { View, Platform, StyleSheet } from "react-native";
import MyButton from "~components/MyButton";
import CustomTextInput from "~components/CustomTextInput";
import CustomPicker from "~components/CustomPicker";
import colors from "~theme/colors"

const items = [
  {label: "test", value:"testing"},
  {label: "seynou", value:"seynabou"}
]

export default class EarningForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <CustomPicker items={items} icon={Platform.OS === "ios" ? "ios-contact" : "md-contact"} />
          <CustomTextInput
            icon={Platform.OS === "ios" ? "ios-cash" : "md-cash"}
            placeholder="Montant"
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SECONDARY,
    padding: 10
  },
  inputContainer: {
    backgroundColor: colors.BACKGROUND
  }
})
