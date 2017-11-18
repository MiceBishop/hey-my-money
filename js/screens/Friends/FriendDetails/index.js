import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, TextInput } from "react-native";
import PropTypes from "prop-types";
import MyButton from "~components/MyButton";
import colors from "~theme/colors";
import EarningsList from "~screens/Earnings/components/EarningsList";
import LossesList from "~screens/Losses/components/LossesList";
import DateFormatter from "date-format";

const monthNames = [
  "Jan",
  "Fev",
  "Mars",
  "Avr",
  "Mai",
  "Juin",
  "Juil",
  "Aout",
  "Sept",
  "Oct",
  "Nov",
  "Déc"
];

const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

const today = new Date();

const data = [
  {
    id: 1,
    name: "Modoulo Boly SOW",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum dui," +
      "quis venenatis sapien. Suspendisse potenti. Ut enim ante, posuere dignissim consectetur sed," +
      "vestibulum ut dolor. Maecenas malesuada et purus ac porttitor.Donec vulputate risus mauris, et" +
      "tincidunt magna euismod vel.",
    amount: 1000,
    createdAt:
      dayNames[today.getDay()] +
      ", " +
      today.getDate() +
      " " +
      monthNames[today.getMonth()] +
      " " +
      today.getFullYear()
  },
  {
    id: 2,
    name: "Modoulo Boly SOW",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum dui," +
      "quis venenatis sapien. Suspendisse potenti. Ut enim ante, posuere dignissim consectetur sed," +
      "vestibulum ut dolor. Maecenas malesuada et purus ac porttitor.Donec vulputate risus mauris, et" +
      "tincidunt magna euismod vel.",
    amount: 2000,
    createdAt:
      dayNames[today.getDay()] +
      ", " +
      today.getDate() +
      " " +
      monthNames[today.getMonth()] +
      " " +
      today.getFullYear()
  },
  {
    id: 3,
    name: "Modoulo Boly SOW",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum dui," +
      "quis venenatis sapien. Suspendisse potenti. Ut enim ante, posuere dignissim consectetur sed," +
      "vestibulum ut dolor. Maecenas malesuada et purus ac porttitor.Donec vulputate risus mauris, et" +
      "tincidunt magna euismod vel.",
    amount: 3000,
    createdAt:
      dayNames[today.getDay()] +
      ", " +
      today.getDate() +
      " " +
      monthNames[today.getMonth()] +
      " " +
      today.getFullYear()
  }
];

export default class FriendDetails extends React.Component {
  static navigationOptions = {
    title: "Mohamed Rachid Wendpagnagde COMPAORE"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerSeparator}>
          <Text color={colors.BACKGROUND} style={{ fontWeight: "bold" }}>
            Gains et Dettes spécifiques
          </Text>
        </View>
        <EarningsList
          onPress={item =>
            this.props.navigation.navigate("EarningDetails", { item })}
          data={data}
        />
        <View
          style={{
            borderBottomColor: colors.RIPPLEGREY,
            borderBottomWidth: 4
          }}
        />
        <MyButton
          title="Modifier Contact"
          color={colors.SECONDARY}
          titleColor={
            Platform.OS === "ios" ? colors.BACKGROUND : colors.BACKGROUND
          }
          style={{ marginTop: 2, width: 150 }}
          onPress={() => {}}
        />
        <MyButton
          title="Supprimer Contact"
          color={colors.SECONDARY}
          titleColor={Platform.OS === "ios" ? "red" : "red"}
          style={{ marginTop: 2, width: 150 }}
          onPress={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SECONDARY
  },
  headerSeparator: {
    backgroundColor: colors.RIPPLEGREY,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

FriendDetails.propTypes = {
  item: PropTypes.object
};
