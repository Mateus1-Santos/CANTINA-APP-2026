import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native"


export default function LoginScreens (){
    const navigation = useNavigation ();
    const Login = () =>{
        const [email, setEmail] = useState ('');
        const [senha, setSenha] = useState ('');
        const [error, setError] = useState ('');
    }
 
    function handleLogin (){
        if (!email || !senha ){
            setError('Preencha todos os campos! ');
            return;
        }
        if(!email.includes("@")){
            setError("Digite um email válido!")
        }
        if(senha.lebgth < 7){
            setError('A senha deve ter no mínimo 7 caracteres.')
            return;
        }
    }


    return(
    <>
        <View style={styles.container}>
            <Text style={styles.texto}>Login</Text>
            <TextInput placeholder="Digite seu email" style={styles.input} onChangeText={(e) => setEmail (e)}></TextInput>
            <TextInput placeholder="Digite sua senha" style={styles.input} onChangeText={(s) => setSenha (s)}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButoon} onPress={handleLogin}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    input:{
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        width: 150,
        
    },
    button:{
        borderWidth: 1,
        width: 100,
        height: 30,
        backgroundColor: '#E5D0FF',
        borderRadius: 5,
    },
    textButoon:{
        textAlign: 'center'
    }

})