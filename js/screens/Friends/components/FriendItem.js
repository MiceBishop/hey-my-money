import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";

import PropTypes from "prop-types";
import colors from "~theme/colors";
import fonts from "~theme/fonts";
import Icon from "react-native-vector-icons/Ionicons";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            style={styles.icon}
            name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
            size={40}
            color={colors.BACKGROUND}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    );
  }
}

export default class FriendItem extends Component {
  render() {
    const { item } = this.props;
    return Platform.OS === "ios" ? (
      <TouchableHighlight
        underlayColor={colors.RIPPLEGREY}
        activeOpacity={0.6}
        {...this.props}
        onPress={this.props.onPress}
      >
        <View>
          <Item item={item} />
        </View>
      </TouchableHighlight>
    ) : (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        {...this.props}
        onPress={this.props.onPress}
      >
        <View>
          <Item item={item} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  icon: {},
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    padding: 20
  },
  iconContainer: {
    justifyContent: "center"
  }
});

FriendItem.propTypes = {
  item: PropTypes.object.isRequired
};
