/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  NavigatorIOS
} from 'react-native';
import { Input, Preview } from './src/components';

class InputWrapper extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Input />
      </View>
    );
  }
}

class PreviewWrapper extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Preview />
      </View>
    );
  }
}

class MarkdownMemo extends Component {
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: InputWrapper,
          title: 'MarkdownMemo',
          rightButtonTitle: 'Preview',
          onRightButtonPress: () => this.refs.nav.push({
            component: PreviewWrapper,
            title: 'Preview'
          }),
          backButtonTitle: 'Back'
        }}
        barTintColor='#FF5722'
        tintColor='#fff'
        titleTextColor='#fff'
        style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    paddingTop: 64
  },
});

AppRegistry.registerComponent('MarkdownMemo', () => MarkdownMemo);
