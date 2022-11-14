import * as React from 'react';
import {Button, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

    const Login = ()=>{
        //TODO: Validar el login despues con estos datos de prueba.
        const userTest = [{
            "user" : "Patricio",
            "pass" : "admin"
        }];
        
        return(
            <View>
                <View style={{alignItems : 'center'}} >
                    <View style={styles.foto}>
                    </View>
                </View>
                <Text style={styles.titulo}>Inicio sesion</Text>
                <TextInput style={styles.inputs} placeholder='Ingresa tu rut' />
                <TextInput style={styles.inputs} secureTextEntry={true} placeholder='Ingresa tu contraseña' />
            </View>   
        )
    }
    
    // ESTILOS
    const styles = StyleSheet.create({
        foto : {
            backgroundColor : '#999',
            width : 150,
            height : 150,
            borderRadius : 100,
        },
        titulo : {
            textAlign : 'center',
            fontWeight : 'bold',
            fontSize : 30,
            marginTop : 10,
            marginBottom : 10,
        },
        inputs : {
            padding : 10,
            width : 250,
            marginBottom : 15,
            borderWidth : 1,
            borderColor : '#999',
            borderRadius : 8,
        },
        boton : { 
            backgroundColor : 'black',
            textAlign : 'center',
            padding : 15,
            borderRadius : 8,
        },
        pass : {
            color : '#3897FC',
            marginTop : 50,
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            
          },

    
    });
    


export default Login