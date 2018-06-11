
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TodoItem extends Component {
  render() {
    return (
          <Text style={styles.item}>Item 1</Text>
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