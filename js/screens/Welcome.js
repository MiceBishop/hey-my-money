import React, { Component } from 'react'
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import StepOne from '../components/StepOne.js'
import StepTwo from '../components/StepTwo.js'
import StepThree from '../components/StepThree.js'

export default class Welcome extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      activePage: 0,
    }
  }

  gotoPage(page) {
    this.refs.viewPager.setPage(page);
  }

  onPageSelected({ position }) {
    this.setState({ activePage: position });
  }

  render() {
    return(
      <View style={{flex:1}}>
        <IndicatorViewPager
            style={{flex:1}}
            indicator={this._renderDotIndicator()}
            onPageSelected={this.onPageSelected.bind(this)}
            ref="viewPager"
        >
          <View>
            <StepOne onPageChange={(page) => this.gotoPage(page)} />
          </View>
          <View>
            <StepTwo onPageChange={(page) => this.gotoPage(page)} />
          </View>
          <View>
            <StepThree onPageChange={(page) => this.gotoPage(page)} />
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