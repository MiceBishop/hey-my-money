import React, { Component } from 'react'
import {
    Text, View, StyleSheet, Button, Platform
} from 'react-native'

import FriendsList from './components/FriendsList'
import colors from '~theme/colors'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationActions } from 'react-navigation'

 // ============ Static Data ============= //
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
  },
  {
    id: 5,
    name: "Modoulo Boly SOW"
  },
  {
    id: 6,
    name: "Arame MBENGUE"
  },
  {
    id: 7,
    name: "Serigne Saalihou Mbacké NDIAYE"
  },
  {
    id: 8,
    name: "Mohamed Rachid Wendpagnagde COMPAORE"
  },
  {
    id: 9,
    name: "Modoulo Boly SOW"
  },
  {
    id: 10,
    name: "Arame MBENGUE"
  },
  {
    id: 11,
    name: "Serigne Saalihou Mbacké NDIAYE"
  },
  {
    id: 12,
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

    const navigateAction = NavigationActions.navigate({
      routeName: 'FriendDetails',
      params: {},
    })
    
    return(
      <View style={styles.container}>
        <FriendsList onPress={() => this.props.navigation.dispatch(navigateAction)} data={data} />
         <ActionButton
          buttonColor={'#81D4FA'}
          icon={<Icon color={colors.SECONDARY} name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'} size={30} />}
          onPress={() => {}}
          fixNativeFeedbackRadius={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  actionButtonIcon: {

  }
})