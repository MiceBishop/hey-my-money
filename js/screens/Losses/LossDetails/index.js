import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import colors from "~theme/colors";
import MyButton from "~components/MyButton";
import Icon from "react-native-vector-icons/Ionicons";

export default class LossDetails extends React.Component {
  static navigationOptions = {
    title: "Détails"
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.text, { color: colors.SECONDARY, fontSize: 20, fontWeight: "bold" }]}>
            {this.props.navigation.state.params.item.name}
          </Text>
        </View>

        <View style={styles.content}>
          <View>
            <View style={[styles.item, {height: 200}]}>
              <Icon
                name={
                  Platform.OS === "ios" ? "ios-clipboard-outline" : "md-clipboard"
                }
                size={40}
                color="black"
              />
              <Text style={styles.text}>{this.props.navigation.state.params.item.description}</Text>
            </View>
            <View style={styles.item}>
              <Icon
                name={
                  Platform.OS === "ios" ? "ios-cash-outline" : "md-cash"
                }
                size={40}
                color="black"
              />
              <Text style={[styles.text, {color: "red"}]}>
                Montant: {this.props.navigation.state.params.item.amount}
              </Text>
            </View>
            <View style={styles.item}>
              <Icon
                name={
                  Platform.OS === "ios" ? "ios-calendar-outline" : "md-calendar"
                }
                size={40}
                color="black"
              />
              <Text style={styles.text}>
                Enregistré le: {this.props.navigation.state.params.item.createdAt}
              </Text>
            </View>
          </View>
          <MyButton
            title="Récupérer"
            color={colors.SECONDARY}
            titleColor={
              Platform.OS === "ios" ? colors.BACKGROUND : colors.BACKGROUND
            }
            width="auto"
            style={{ marginTop: 2 }}
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
    backgroundColor: colors.SECONDARY
  },
  header: {
    height: 140,
    backgroundColor: colors.BACKGROUND,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
    padding: 5,
  },
  item: {
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 15
  }
});

LossDetails.propTypes = {
  item: PropTypes.object
};
