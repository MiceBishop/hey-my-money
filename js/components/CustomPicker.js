import React, { Component } from "react";
import { StyleSheet, View, Platform, PickerIOS, TextInput } from "react-native";
import ModalPicker from "react-native-modal-picker";
import Icon from "react-native-vector-icons/Ionicons";
import CustomTextInput from "~components/CustomTextInput";
import CustomPickerAndroid from "~components/CustomPickerAndroid";
import colors from "~theme/colors";

export default class CustomPicker extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      Platform.OS === "ios" ? (
      <ModalPicker
        style={{height: 50}}
        sectionTextStyle={{color: colors.SECONDARY}}
        data={this.props.items}
        initValue={this.props.label}
        onChange={option => {}} />
      ) : (
        <CustomPickerAndroid items={this.props.items} icon={this.props.icon} />
      )
    );
  }
}

const styles = StyleSheet.create({});
