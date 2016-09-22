import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

export default class Preview extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
