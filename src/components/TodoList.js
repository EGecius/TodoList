
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.header}>Todo list!</Text>

        <View style={styles.content}>
          <Text style={styles.item}>Item 1</Text>
          <Text style={styles.item}>Item 2</Text>
          <Text style={styles.item}>Item 3</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }

});