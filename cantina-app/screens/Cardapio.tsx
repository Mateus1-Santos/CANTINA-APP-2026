import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Lanchonete do Daniel Marcos</Text>
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
  nome: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'serif',
    textAlign: 'center'
  }
});