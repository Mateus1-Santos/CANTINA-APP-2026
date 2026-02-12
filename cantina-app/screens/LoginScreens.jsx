import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';



export default function LoginScreens(){
    return(
    <>
        <View style={styles.container}>
            <Text style={styles.texto}>Login</Text>
            <TextInput placeholder="Digite seu email" style={styles.input}></TextInput>
            <TextInput placeholder="Digite sua senha" style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButoon}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
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