import React, { Component } from "react";
import { ScrollView, View, Platform, StyleSheet } from "react-native";
import MyButton from "~components/MyButton";
import CustomTextInput from "~components/CustomTextInput";
import colors from "~theme/colors";
import transacStore from "../mobx/TransacStore";
import { observer } from "mobx-react/native";

@observer
export default class AddingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      description: "",
      amount: 0,
    }
  }

  handleSubmitForm() {  
    let transac = {
      username: this.state.username,
      amount: this.state.amount,
      description: this.state.description,
      type: this.props.type,
    }
    // transacStore.addTransac(transac)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container } keyboardDismissMode="on-drag" >
        <CustomTextInput
          icon={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
          placeholder="Concerné"
          onChangeText={(username) => this.setState({username})}
        />
        <CustomTextInput
          icon={Platform.OS === "ios" ? "ios-cash" : "md-cash"}
          placeholder="Description"
          multiline={true}
          numberOfLines={8}
          style={{height: 200}}
          onChangeText={(description) => this.setState({description})}
        />
        <CustomTextInput
          icon={Platform.OS === "ios" ? "ios-cash" : "md-cash"}
          placeholder="Montant"
          keyboardType="numeric"
          onChangeText={(amount) => this.setState({amount})}
        />
        <View style={styles.buttonContainer}>
          <MyButton
            color={colors.SECONDARY}
            title="Ajouter"
            titleColor={Platform.OS === "ios" ? colors.SECONDARY : colors.BACKGROUND }
            style={{width: 100}}
            onPress={this.handleSubmitForm.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
    flex: 1,
    padding: 10,
    justifyContent: "center",
    paddingVertical: 20
  },
  buttonContainer: {
    marginTop: 50,
    alignItems: "center",
  }
});
