import React, { Component } from 'react'
import {
    Text, StyleSheet, View, Button, Platform
} from 'react-native'

import LossesList from './components/LossesList'
import colors from '~theme/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { NavigationActions } from 'react-navigation'
import ActionButton from 'react-native-action-button'
import DateFormatter from 'date-format'

const monthNames = ["Jan", "Fev", "Mars", "Avr", "Mai", "Juin",
  "Juil", "Aout", "Sept", "Oct", "Nov", "Déc"
];

const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]

const today = new Date()

const data = [
  {
    id: 1,
    name: "Modoulo Boly SOW",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum dui,"+
    "quis venenatis sapien. Suspendisse potenti. Ut enim ante, posuere dignissim consectetur sed,"+
    "vestibulum ut dolor. Maecenas malesuada et purus ac porttitor.Donec vulputate risus mauris, et"+
    "tincidunt magna euismod vel.",
    amount: 1000,
    createdAt: dayNames[today.getDay()] + ', ' + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear()
  },
  {
    id: 2,
    name: "Arame MBENGUE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum dui,"+
    "quis venenatis sapien. Suspendisse potenti. Ut enim ante, posuere dignissim consectetur sed,"+
    "vestibulum ut dolor. Maecenas malesuada et purus ac porttitor.Donec vulputate risus mauris, et"+
    "tincidunt magna euismod vel.",
    amount: 1000,
    createdAt: dayNames[today.getDay()] + ', ' + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear()
  },
  {
    id: 3,
    name: "Serigne Saalihou Mbacké NDIAYE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum dui,"+
    "quis venenatis sapien. Suspendisse potenti. Ut enim ante, posuere dignissim consectetur sed,"+
    "vestibulum ut dolor. Maecenas malesuada et purus ac porttitor.Donec vulputate risus mauris, et"+
    "tincidunt magna euismod vel.",
    amount: 1000,
    createdAt: dayNames[today.getDay()] + ', ' + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear()
  },
  {
    id: 4,
    name: "Mohamed Rachid Wenpagnagde COMPAORE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum dui,"+
    "quis venenatis sapien. Suspendisse potenti. Ut enim ante, posuere dignissim consectetur sed,"+
    "vestibulum ut dolor. Maecenas malesuada et purus ac porttitor.Donec vulputate risus mauris, et"+
    "tincidunt magna euismod vel.",
    amount: 1000,
    createdAt: dayNames[today.getDay()] + ', ' + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear()
  },
];

export default class Losses extends Component {
  static navigationOptions = {
    tabBarLabel: 'Mes dettes',
    tabBarIcon: ({ tintColor }) => {
      return(
        <Icon
          name={ Platform.OS === 'ios' ? 'ios-arrow-round-up' : 'md-arrow-round-up' }
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
      routeName: 'LossDetails',
      params: {},
    })
    
    return (
      <View style={styles.container}>
        <LossesList onPress={() => this.props.navigation.dispatch(navigateAction)} data={data} />
         <ActionButton
          buttonColor={'red'}
          icon={<MaterialIcon color='white' name='note-add' size={30} />}
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
    backgroundColor: colors.SECONDARY
  }
})