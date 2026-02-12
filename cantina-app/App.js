import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useNavigation, NavigationContainer} from "@react-navigation/native"
import Cardapio from './assets/screens/Cardapio';
import LoginScreen from './screens/LoginScreens'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Screen name='Cadastro' component={Cardapio}/>
      <Stack.Screen name='Login' component-={LoginScreen}/>
    </NavigationContainer>
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
