import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


//importaciones de las paginas
import Login from './src/screens/Login'
import Pedido from './src/screens/NuevoPedido';
import Main from './src/screens/Main';
import Mesas from './src/screens/Mesas';
import PedidoEnviado from './src/screens/PedidoEnviado';
import Carrito from './src/screens/Carrito';
import TestBar from './src/screens/barTest';

import * as Font from 'expo-font'

//navegacion

import {NativeRouter,Switch,Route,Link} from 'react-router-native';


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
    <NativeRouter>
      <View styles={styles.container}>
        <Login/>
      </View>
 
    </NativeRouter>

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

