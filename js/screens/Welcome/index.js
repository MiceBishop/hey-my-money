import React, { Component } from 'react'
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { NavigationActions } from 'react-navigation'

import StepOne from '~screens/Welcome/components/StepOne.js'
import StepTwo from '~screens/Welcome/components/StepTwo.js'
import StepThree from '~screens/Welcome/components/StepThree.js'
import colors from '~theme/colors'

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
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Dashboard'})
      ]
    })

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
          {/*<View>
            <StepTwo onPageChange={(page) => this.gotoPage(page)} />
          </View>*/}
          <View>
            <StepThree onPageChange={() => this.props.navigation.dispatch(resetAction)} />
          </View>
        </IndicatorViewPager>
      </View>
    )
  }

  _renderDotIndicator() {
      return <PagerDotIndicator pageCount={2} />;
  }

}

const styles = StyleSheet.create({
  
});