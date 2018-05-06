import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './components/styles/styles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Text Change</Text>
      </View>
    );
  }
}
