import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import Markdown from 'react-native-markdown';

export default class Preview extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <Markdown>
          {this.props.text}
        </Markdown>
      </View>
    );
  }
}
