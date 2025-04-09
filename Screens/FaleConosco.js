import React from 'react';
import { StyleSheet,Text,Button,View,Image, } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function FaleConosco(){
    const [mensagem, onChangeText] = React.useState('');
    const [nome, onChangeNome] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    return(
        <View style={styles.container}>
            <Image
            source={{uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/24733299-esportes-loja-logotipo-modelo-vetor.jpg'}}
            style={{width: 180, height: 180}}
            />  

            <TextInput style={styles.input} placeholder="Nome" onChangeText={onChangeNome} value={nome}></TextInput> 
            <TextInput style={styles.input} placeholder="Email" onChangeText={onChangeEmail} value={email}></TextInput>
            <TextInput style={styles.input} placeholder="Mensagem" onChangeText={onChangeText} value={mensagem}></TextInput> 
            <Text style={styles.texto}>Olá, {nome}, seu email é {email}. Sua mensagem:  {mensagem}</Text>




        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        backgroundColor:'white'
    },
    texto:{
        fontSize:20,
    }

  });
  