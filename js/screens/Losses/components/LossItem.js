import React, { Component } from 'react'
import {
  View, Text, Platform, TouchableOpacity, TouchableHighlight, StyleSheet, TouchableNativeFeedback
} from 'react-native'

import PropTypes from 'prop-types'
import colors from '~theme/colors'
import fonts from '~theme/fonts'
import Icon from 'react-native-vector-icons/Ionicons'
import MyButton from '~components/MyButton'

class Item extends Component {
  render() {
    const { item } = this.props
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Icon name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} size={24} color='black' />
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.footer}>
          <Icon name={Platform.OS === 'ios' ? 'ios-cash-outline' : 'md-cash'} size={24} color='black' />
          <Text style={styles.amount}>-{item.amount}</Text>
        </View>
        <View style={styles.date}>
          <Icon name={Platform.OS === 'ios' ? 'ios-calendar-outline' : 'md-calendar'} size={24} color='black' />
          <Text style={styles.createdAt}>{item.createdAt}</Text>
          <View style={{marginLeft: 'auto'}}>
            <MyButton
              onPress={() => {}}
              style={{ width: 150 }}
              title="Payer"
              titleColor={Platform.OS === 'ios' ? colors.BACKGROUND: colors.SECONDARY}
              color={colors.BACKGROUND}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default class LossItem extends Component {
  render() {
    const { item } = this.props
    return(

      Platform.OS === 'ios' ?
      <TouchableHighlight underlayColor={colors.RIPPLEGREY} activeOpacity={0.6} {...this.props} onPress={this.props.onPress} >
        <View>
          <Item item={item}/>
        </View>
      </TouchableHighlight> :
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        {...this.props}
        onPress={this.props.onPress}
      >
        <View>
          <Item item={item}/>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    height: 25,
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    height: 25,
    alignItems: 'center'
  },
  date: {
    flexDirection: 'row',
    height: 25,
    alignItems: 'center',
  },
  name: {
    paddingLeft: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  amount: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 10,
  },
  createdAt: {
    fontStyle: 'italic',
    paddingLeft: 18,
  }
})

LossItem.propTypes = {
    item: PropTypes.object.isRequired,
}