import React, { Component } from "react";
import { View, Platform, StyleSheet } from "react-native";
import MyButton from "~components/MyButton";
import CustomTextInput from "~components/CustomTextInput";
import CustomPicker from "~components/CustomPicker";
import colors from "~theme/colors";
let index = 0;
const items = [
  { label: "test", value: "testing", key: index++ },
  { label: "seynou", value: "seynabou", key: index++ }
];

export default class AddingForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomPicker
          items={items}
          icon={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
        />
        <CustomTextInput
          icon={Platform.OS === "ios" ? "ios-cash" : "md-cash"}
          placeholder="Description"
          multiline={true}
          numberOfLines={8}
          style={{height: 200}}
        />
        <CustomTextInput
          icon={Platform.OS === "ios" ? "ios-cash" : "md-cash"}
          placeholder="Montant"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <MyButton
            color={colors.SECONDARY}
            title="Ajouter"
            titleColor={this.props.colorType}
            style={{width: 100}}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 50,
    alignItems: "center",
  }
});
