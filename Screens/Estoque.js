import { StyleSheet,Text,Button,View,Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Estoque(){
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Estoque</Text>

            <View style={styles.row1}>
            
            <View style={styles.produto}>
            <Image
            source={{uri: 'https://cdn.awsli.com.br/2500x2500/1714/1714539/produto/301464319/e557ac303ce1294613d160a2305c4a7e-badvelksjs.jpeg'}}
            style={{width: 80, height: 80}}
            />
            <Text style={styles.texto}>Camiseta Nike</Text>
            <Text style={styles.texto}>Camiseta preta</Text>
            </View>

            <View style={styles.produto}>
            <Image
            source={{uri: 'https://www.wilsonloja.com.br/cdn/shop/files/WTB9300XB03_48977916-d073-4ac2-b96c-e6ca3ffbd5f3.jpg?v=1699900808&width=1200'}}
            style={{width: 80, height: 80}}
            />
            <Text style={styles.texto}>Bola Wilson</Text>
            <Text style={styles.texto}>Bola Basquete</Text>
            </View>





            </View>


            <View style={styles.row2}>
            
            <View style={styles.produto}>
            <Image
            source={{uri: 'https://www.wilsonloja.com.br/cdn/shop/files/WR172811U_0_CLASH_100_V3_FRM_Black_Infrared.png.cq5dam.web.1200.1200.jpg?v=1736533647&width=1200'}}
            style={{width: 80, height: 80}}
            />
            <Text style={styles.texto}>Raquete Wilson</Text>
            <Text style={styles.texto}>Raquete Tênis</Text>
            </View>



            <View style={styles.produto}>
            <Image
            source={{uri: 'https://bayard.vtexassets.com/arquivos/ids/3175810/0801380003-A.jpg?v=638278696064130000'}}
            style={{width: 80, height: 80}}
            />
            <Text style={styles.texto}>Chuteira Nike</Text>
            <Text style={styles.texto}>Chuteira Futsal</Text>
            </View>
            </View>


            <View style={styles.row3}>
            <View style={styles.produto}>
            <Image
            source={{uri: 'https://cdn.sistemawbuy.com.br/arquivos/178b0084287f37cae1eb7de09418d9f2/produtos/645bc43043a8b/tenis-nike-lebron-witness-iv-650dc5b871bcd.jpg'}}
            style={{width: 80, height: 80}}
            />
            <Text style={styles.texto}>Tenis Nike</Text>
            <Text style={styles.texto}>Tenis Basquete</Text>
            </View>
            </View>




        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    row1:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-around',
        columnGap: 50,

    },
    row2:{
        flexDirection:'row',
        columnGap: 50,
    },
    row3:{
        flexDirection:'row',
        columnGap: 50,
    },
    produto:{
        flexDirection:'column',
        columnGap: 50,
    },
    titulo:{
        fontSize:50,
    },
    texto:{
        fontSize:20,
    }
  });
  