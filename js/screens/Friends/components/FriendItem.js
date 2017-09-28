import React, { Component } from 'react'
import {
  View, Text, Platform, TouchableHighlight, StyleSheet, TouchableNativeFeedback
} from 'react-native'

import PropTypes from 'prop-types'
import colors from '~theme/colors'
import fonts from '~theme/fonts'
import Icon from 'react-native-vector-icons/Ionicons'

class Item extends Component {
  render() {
    const { item } = this.props
    return(
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            style={styles.icon}
            name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
            size={40}
            color={colors.BACKGROUND}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
          
          <View style={styles.rightContainer}>
            <Icon
              style={styles.icon}
              name={ Platform.OS === 'ios' ? 'ios-arrow-forward' : '' }
              size={30}
              color='grey'
            />
          </View>
      </View>
    )
  }
}

export default class FriendItem extends Component {
  handlePress() {

  }

  render() {
    const { item } = this.props
    return(

      Platform.OS === 'ios' ?
      <TouchableHighlight underlayColor={colors.RIPPLEGREY} activeOpacity={0.6} onPress={this.handlePress}>
        <View>
          <Item item={item}/>
        </View>
      </TouchableHighlight> :
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={this.handlePress}
      >
        <View>
          <Item item={item}/>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 70
  },
  icon: {
    margin: 5
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black'
  },
  iconContainer: {
    justifyContent: 'center',
    width: 50
  },
  textContainer: {
    justifyContent: 'center',
    width: 280
  },
  rightContainer: {
    justifyContent: 'center'
  }
})

FriendItem.propTypes = {
    item: PropTypes.object.isRequired
}