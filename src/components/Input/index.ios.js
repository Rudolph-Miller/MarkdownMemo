import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
  static propTypes = {
    initialText: PropTypes.string,
    onChangeText: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      text: props.initialText || '',
      height: 0
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
    this.heigh = this.height.bind(this);
  }

  onChangeText(text) {
    this.props.onChangeText(text);
  }

  onContentSizeChange(event) {
    this.setState({
      height: event.nativeEvent.contentSize.height
    });
  }

  height() {
    return Math.max(30, this.state.height);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          placeholder='# Type in Markdown'
          style={[styles.input, { height: this.height() }]}
          onChangeText={this.onChangeText}
          multiline={true}
          autoFocus={true}
          onContentSizeChange={this.onContentSizeChange}
          defaultValue={this.props.initialText || ''} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0
  },
  input: {
    marginRight: 30,
    marginLeft: 30
  }
});
