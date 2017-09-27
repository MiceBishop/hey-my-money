import React, { Component } from 'react'
import {
    Text, View, StyleSheet, Button
} from 'react-native'

import colors from '~theme/colors'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Friends extends Component {
  static navigationOptions = {
    tabBarLabel: "Amis",
    drawerIcon: () => {
      return(
        <MaterialIcons
          name="email"
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
              <Text>Mes Amis</Text>
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