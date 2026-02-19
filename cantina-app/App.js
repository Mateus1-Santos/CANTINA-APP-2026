import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import cardapio from './assets/screens/Cardapio';
import LoginScreens from './screens/LoginScreens';
import Cadastro from './screens/cadastro';
export default function App() {
  return (

<LoginScreens></LoginScreens>

<Cadastro></Cadastro>
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
