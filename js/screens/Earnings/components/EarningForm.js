import React, { Component } from "react";
import { View } from "react-native";
import AddingForm from "~components/AddingForm";
import colors from "~theme/colors";

export default class EarningForm extends Component {
  render() {
    return (
      <AddingForm type="earning" />
    );
  }
}