
import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class TodoItem extends Component {
  render() {
    return (
          <Text style={styles.item}>{this.props.title}</Text>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    textAlign: 'center',
    color: '#00ffff',
    marginBottom: 5,
  }
});