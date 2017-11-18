import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Platform,
  ScrollView
} from "react-native";

import colors from "~theme/colors";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import ActionButton from "react-native-action-button";
import MyButton from "~components/MyButton";

class Dash extends Component {
  render() {
    return (
      <ScrollView style={styles.innerContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.text}>
            Bonjour Papa Seynou Sy NDIAYE !{"\n"}Ici vous pourrez avoir une vue
            globale de votre solde
          </Text>
        </View>
        <View style={styles.div}>
          <View>
            <Text style={styles.text}>Mes gains:</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={styles.amountPos}>+15000</Text>
          </View>
        </View>
        <View style={styles.div}>
          <View>
            <Text style={styles.text}>Mes dettes:</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={styles.amountNeg}>-10000</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#BDBDBD",
            borderBottomWidth: 1,
            marginLeft: 130,
            marginBottom: 20
          }}
        />
        <View style={styles.div}>
          <View>
            <Text style={styles.text}>Solde:</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={styles.amountPos}>+5000</Text>
          </View>
        </View>
        <View style={[styles.div, { marginTop: 20 }]}>
          <MyButton
            style={{ width: 200 }}
            titleColor={
              Platform.OS === "ios" ? colors.BACKGROUND : colors.SECONDARY
            }
            title="Historique"
            color={colors.BACKGROUND}
            onPress={this.props.onPress}
          />
        </View>
      </ScrollView>
    );
  }
}

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Accueil",
    tabBarIcon: ({ tintColor }) => {
      return (
        <Icon
          name={Platform.OS === "ios" ? "ios-home" : "md-home"}
          size={25}
          color={tintColor}
        />
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Dash onPress={() => this.props.navigation.navigate('HistoryTransacs')} />
        {/*<ActionButton
          spacing={7}
          buttonColor={colors.BACKGROUND}
          useNativeFeedback={false}
          hideShadow={true}
        >
          <ActionButton.Item
            textStyle={{ color: "black" }}
            buttonColor="#81D4FA"
            title="Ajouter ami"
            onPress={() => {}}
            useNativeFeedback={false}
          >
            <MaterialIcon
              name="person-add"
              style={styles.actionButtonIcon}
              size={24}
            />
          </ActionButton.Item>
          <ActionButton.Item
            textStyle={{ color: "black" }}
            buttonColor="red"
            title="Emprunter"
            onPress={() => this.props.navigation.navigate("LossForm")}
            useNativeFeedback={false}
          >
            <MaterialIcon
              name="note-add"
              style={styles.actionButtonIcon}
              size={24}
            />
          </ActionButton.Item>
          <ActionButton.Item
            textStyle={{ color: "black" }}
            buttonColor="green"
            title="Prêter"
            onPress={() => this.props.navigation.navigate("EarningForm")}
            useNativeFeedback={false}
          >
            <MaterialIcon
              name="note-add"
              style={styles.actionButtonIcon}
              size={24}
            />
          </ActionButton.Item>
        </ActionButton>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    padding: 20,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  actionButtonIcon: {
    color: "white"
  },
  welcomeContainer: {
    height: 100
  },
  text: {
    fontFamily: "Dosis-Regular",
    fontSize: 20,
    color: "black"
  },
  amountPos: {
    fontFamily: "Dosis-Regular",
    fontSize: 40,
    color: "green"
  },
  amountNeg: {
    fontFamily: "Dosis-Regular",
    fontSize: 40,
    color: "red"
  },
  div: {
    height: 80,
    flexDirection: "row",
    alignItems: "center"
  }
});
