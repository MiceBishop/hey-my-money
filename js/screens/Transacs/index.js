import React, { Component } from 'react'
import {
    Text, StyleSheet, View, Button
} from 'react-native'

import colors from '~theme/colors'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Transacs extends Component {
  static navigationOptions = {
    tabBarLabel: "Accueil",
    drawerIcon: () => {
      return(
        <MaterialIcons
          name="home"
          size={24}
          style={{color: colors.BACKGROUND}}
        >
        </MaterialIcons>
      )
    }
  }
    render() {
        return(
            <View style={styles.home}>
              <Text>Accueil</Text>
              <Button
                onPress={ () => this.props.navigation.navigate('DrawerOpen')}
                title="Toggle the drawer"
              >
              </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})