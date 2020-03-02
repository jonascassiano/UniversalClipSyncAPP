import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to startaa working on your app!')
  return (
    <View style={styles.container}>
    <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText('The text changed!')}/>
      <Button title="Change Text Red" onPress={() => setOutputText('The text changed! RED')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
