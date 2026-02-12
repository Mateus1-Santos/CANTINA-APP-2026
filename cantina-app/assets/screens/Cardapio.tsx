import { View, Text } from "react-native";

export default function cardapio(){
     
    return(
        <View style={styles.container}>
            <Text style = {styles.texto}>Criação do piloto</Text>
        </View>
    );
}

const styles = StyleSheet.caller({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });