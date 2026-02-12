import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

    <View style={styles.container}> 
    
      <Text style={styles.nome}>Lanchonete do Daniel Marcos</Text>
      <StatusBar style="auto" />

      <View style={styles.item}>
        <Text style={styles.nomeProduto}>X-Tudo</Text>
        <Text style={styles.descricao}>Pão, carne, ovo, bacon, alface, tomate e oleo</Text>
        <Text style={styles.preco}>R$ 25,00</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.nomeProduto}>X-bacom</Text>
        <Text style={styles.descricao}>Pão, carne, bacon, queijo, tomate e oleo</Text>
        <Text style={styles.preco}>R$ 30,00</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.nomeProduto}>Batata Frita</Text>
        <Text style={styles.descricao}>Porção individual crocante</Text>
        <Text style={styles.preco}>R$ 12,00</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.nomeProduto}>Refrigerante</Text>
        <Text style={styles.descricao}>Coca-cola ou Guaraná</Text>
        <Text style={styles.preco}>R$ 6,00</Text>
      </View>

    </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
  descricao:{
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  preco:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  nomeProduto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  item:{
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  container: {
    backgroundColor: '#f2f2f2', // Cinza clarinho para o
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    position: 'absolute', 
    top: 50,              
    left: 20,             
    right: 20,            
    backgroundColor: 'yellow',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'serif'
  },
});