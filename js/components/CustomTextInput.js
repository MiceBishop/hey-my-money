import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "~theme/colors";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

export default class CustomTextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name={this.props.icon} color="white" size={25} />
        </View>
        <TextInput
          {...this.props}
          style={[styles.input, this.props.style]}
          placeholderTextColor="white"
          underlineColorAndroid={"rgba(0,0,0,0)"}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 1
  },

  iconContainer: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    padding: 15,
    width: 50
  },

  input: {
    fontSize: 15,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
    fontWeight: "bold",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  }
});

CustomTextInput.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.object
};
