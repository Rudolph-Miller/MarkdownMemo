/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Input, Preview } from './src/components';

class MarkdownMemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input />
        <Preview />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('MarkdownMemo', () => MarkdownMemo);
