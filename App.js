import React, {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login'
import Pedido from './src/screens/NuevoPedido';
import Main from './src/screens/Main';
import Mesas from './src/screens/Mesas';
import PedidoEnviado from './src/screens/PedidoEnviado';
import Carrito from './src/screens/Carrito';
import TestBar from './src/screens/barTest';

import * as Font from 'expo-font'




export default function App() {

  const [fontsLoaded,setFontsLoaded] = useState(false);
  useEffect(() =>{
    if(!fontsLoaded){
      Font.loadAsync({
        'uber-move' : require('./assets/fonts/UberMoveMedium.otf'),
      });
    }
  });
  
  return (
    <View style={styles.container}>
      <TestBar />
      <StatusBar style="auto" />
    </View>
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

