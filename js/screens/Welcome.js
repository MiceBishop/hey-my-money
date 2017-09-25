import React, { Component } from 'react'
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import StepOne from '../components/StepOne.js'

export default class Welcome extends Component {
  render() {
    return(
      <View style={{flex:1}}>
        <IndicatorViewPager
            style={{flex:1}}
            indicator={this._renderDotIndicator()}
        >
          <View style={{backgroundColor:'cadetblue'}}>
            <StepOne />
          </View>
          <View style={{backgroundColor:'cornflowerblue'}}>
            <Text>page two</Text>
          </View>
          <View style={{backgroundColor:'#1AA094'}}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager>
      </View>
    )
  }

  _renderDotIndicator() {
      return <PagerDotIndicator pageCount={3} />;
  }

}

const styles = StyleSheet.create({
  
});