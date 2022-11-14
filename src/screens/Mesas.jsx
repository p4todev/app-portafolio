import React from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MesasBar from '../components/MesasBar';
import AppBar from '../components/AppBar';

const Mesas = ()=>{

    const adentro = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
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
                                <Text style={{
                                    color: 'white',
                                    fontFamily :'uber-move',
                                }}>{mesa}
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

const styles = StyleSheet.create({
    contenedor :{
        width : '100%',
        height : '95%',
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
    }
});

export default Mesas;