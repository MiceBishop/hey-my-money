import React, { Component } from 'react'
import {
    Text, View, StyleSheet, Button, Platform
} from 'react-native'

import FriendsList from './components/FriendsList'
import colors from '~theme/colors'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: 1,
    name: "Modoulo Boly SOW"
  },
  {
    id: 2,
    name: "Arame MBENGUE"
  },
  {
    id: 3,
    name: "Serigne Saalihou Mbacké NDIAYE"
  },
  {
    id: 4,
    name: "Mohamed Rachid Wendpagnagde COMPAORE"
  }
];

export default class Friends extends Component {
  static navigationOptions = {
    tabBarLabel: 'Amis',
    tabBarIcon: ({ tintColor }) => {
      return(
        <Icon
          name={ Platform.OS == 'ios' ? 'ios-contacts' : 'md-contacts' }
          size={25}
          color={ tintColor }
        />
      )
    }
  }
  handlePress() {

  }
  render() {
    return(
      <View style={styles.container}>
        <FriendsList data={data} />
         <ActionButton
          buttonColor={colors.BACKGROUND}
          icon={<Icon color={colors.SECONDARY} name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'} size={30} />}
          onPress={() => {}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  actionButtonIcon: {

  }
})