
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import TodoItem from './TodoItem';


export default class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.header}>Todo list!</Text>

        <View style={styles.content}>
          <TodoItem title={"Item 1"}/>
          <TodoItem title={"Item 2"}/>
          <TodoItem title={"Item 3"}/>
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