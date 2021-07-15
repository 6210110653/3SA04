import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const doIt = () => {
  console.log("Hello Arm")
  }
  return (
  <View style={styles.container}>
  <Text onPress={doIt}>Hi Arm</Text>
  <StatusBar style="auto" />
  </View>
  );
 }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
