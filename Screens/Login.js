import { StyleSheet,Text,Button,View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function Login(){

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Seja bem vindo ao site!!</Text>

            <TextInput style={styles.input} placeholder="Email"></TextInput> 
            <TextInput style={styles.input} placeholder="Senha"></TextInput>  
            <Button title="Entrar"> </Button>   
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
    titulo:{
        fontSize:30,
    },

  });
  