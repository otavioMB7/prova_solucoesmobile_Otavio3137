import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Estoque from './Screens/Estoque';
import FaleConosco from './Screens/FaleConosco';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';




export default function App() {
  return (
    <View style={styles.container}>


      <Login></Login>
      {/* <Estoque></Estoque> */}
      {/* <FaleConosco></FaleConosco> */}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
