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
}
//probando si funciona
function WindowLogin({ navigation }) {
  Fonts();
  return (
    <View style={styles.container}>
      <Carrito />
      <StatusBar style="auto" />
    </View>
  );
}

function WindowMain({ navigation }) {
  return (
    <View style={styles.container}>
      <Main />
      <View>
        <TouchableOpacity style={styles.buttons}><Text style={styles.textBtn} 
        onPress={() => navigation.navigate('Mesas')}>Nueva Orden</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons}><Text style={styles.textBtn} >Estado Orden</Text></TouchableOpacity>
      </View>
    </View>
  );
}

function WindowMesas({ navigation }) {
  const adentro = [
    1,2,3,4,5,6,7,8,9,10
  ];

  return(
    <View style={styles.contenedor}>
       <View>
          <Text style={styles.titulo}>Seleccion Mesas</Text>
       </View>
       <View style={{
          alignItems : 'center',
       }}>
          <ScrollView  horizontal style={styles.menu} >
             <View style={{
                          flexDirection: 'row',
                          padding : 10,
                          
             }}>
                 <Text style={styles.texto}>Adentro</Text>
                 <Text style={styles.texto}>Fuera</Text>
             </View>
          </ScrollView>
       </View>
       <View style={{
          alignItems : 'center',
       }}>
          <View style={styles.mesasContenedor}>
              {
                  adentro.map(mesa=>(
                      <View style={{
                          justifyContent : 'center',
                          alignItems : 'center',
                          padding : 10,
                      }} >
                          <View style={{
                          width : 80,
                          height : 80,
                          backgroundColor : 'black',
                          margin: 3,
                          justifyContent : 'center',
                          alignItems : 'center',
                        
                      }}>
                              <Text style={{ color: 'white'}} 
                              onPress={() => navigation.navigate('NuevoPedido')}>{mesa}
                              </Text>
                          </View>
                      </View>
                  ))
              }
          </View>
       </View>
    </View>
  )
}

function WindowNuevoPedido({ navigation }) {
  return (
    <View style={styles.container}>
      <Pedido />
      <View style={{ alignItems : 'center',}}>
          <TouchableOpacity style={styles.pedidoBtn} onPress={() => navigation.navigate('Carrito')}>
            <View style={{ flexDirection : 'row', textAlign  : 'center', justifyContent : 'center'}}>
              <Text style={{ color : 'white', textAlign : 'center', fontWeight : 'bold', fontSize : 17, fontFamily : 'uber-move'}}
                >Pedido</Text>
              <SecodIcon name="shoppingcart" type="AntDesign" size={20} style={{color : 'white'}}/>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}

function WindowCarrito({ navigation }) {
  return (
    <View style={styles.container}>
      <Carrito />
      <View style={{ justifyContent : 'center', alignItems : 'center',}}>
        <TouchableOpacity style={styles.pedidoBtn} onPress={() => navigation.navigate('PedidoEnviado')}>
          <View style={{ flexDirection : 'row', textAlign  : 'center', justifyContent : 'center'}}>
            <Text style={{ color : 'white', textAlign : 'center', fontWeight : 'bold', fontSize : 17, fontFamily : 'uber-move'}}
            >Enviar</Text>
          </View>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

function WndowPedidoEnviado({ navigation }) {
  return (
    <View style={styles.container}>
      <PedidoEnviado />
      <TouchableOpacity style={styles.boton}>
        <Text style={{color : 'white',textAlign : 'center',fontWeight : 'bold',}} 
        onPress={() => navigation.navigate('Main')}>Ir a Main</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={WindowLogin} />
        <Stack.Screen name="Main" component={WindowMain} />
        <Stack.Screen name="Mesas" component={WindowMesas}/>
        <Stack.Screen name="NuevoPedido" component={WindowNuevoPedido}/>
        <Stack.Screen name="Carrito" component={WindowCarrito}/>
        <Stack.Screen name="PedidoEnviado" component={WndowPedidoEnviado}/>
      </Stack.Navigator>
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
  boton : { 
    backgroundColor : 'black',
    textAlign : 'center',
    padding : 15,
    borderRadius : 8,
  },
  botonera : {
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolute',
    bottom : 150,
    right : 0,
    left : 0,
  },
  buttons : {
    backgroundColor : 'black',
    margin : 8,
    padding: 15,
    color : 'white',
    textAlign : 'center',
    fontFamily : 'uber-move',
    borderRadius : 8,
    width : 250,
  },
  textBtn : {
    color : 'white',
    fontSize : 17,
    textAlign : 'center',
  },
  texto : {
    margin : 10,
    fontFamily : 'uber-move',
  },
  titulo : {
    fontWeight : 'bold',
    fontSize : 30,
    marginLeft : 20,
    marginTop : 40,
    fontFamily : 'uber-move',
  },
  mesasContenedor : {
    width : '80%',
    height : '80%',
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'center',
    alignItems : 'center',
  },
  mesas : {
    margin : 5,
    padding : 10,
    justifyContent : 'space-between',
    marginLeft : 10,
  },
  pedidoBtn :{
    marginTop :20,
    backgroundColor : 'black',
    width : '50%',
    padding : 15,
    marginBottom : 20,
    borderRadius : 8,
  },
});

