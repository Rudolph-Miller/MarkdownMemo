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
    navigator: PropTypes.object.isRequired,
    initialText: PropTypes.string,
    onChangeText: PropTypes.func.isRequired
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Input
          initialText={this.props.initialText}
          onChangeText={this.props.onChangeText} />
      </View>
    );
  }
}

class PreviewWrapper extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Preview text={this.props.text} />
      </View>
    );
  }
}

class MarkdownMemo extends Component {
  constructor() {
    super();

    this.state = {
      text: 'sample'
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({
      text: text
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: InputWrapper,
          title: 'MarkdownMemo',
          passProps: {
            onChangeText: this.onChangeText,
            initialText: this.state.text
          },
          rightButtonTitle: 'Preview',
          onRightButtonPress: () => this.refs.nav.push({
            component: PreviewWrapper,
            title: 'Preview',
            passProps: {
              text: this.state.text
            }
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
