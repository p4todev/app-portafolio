import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native'
import AppBar from '../components/AppBar';
import datatest from '../dataTest/data';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SecodIcon from 'react-native-vector-icons/AntDesign'
import Add from 'react-native-vector-icons/Ionicons'


const Pedido = ()=>{
    return(
     <View style={styles.contenedor}>
        <View style={{
            flexDirection : 'row',
            justifyContent : 'space-between',
            alignItems : 'center',
        }}>
            <View>
                <Text style={styles.mesa}>Mesa 1</Text>
            </View>
            <View>
                <TouchableWithoutFeedback>
                <Icon name='search' type="MaterialIcons" size={40} style={{
                    marginRight : 20,
                    marginTop : 20,
                }}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <AppBar />
        <View style={{
            height : '70%',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {datatest.map(rec=>(
            <View style={[styles.rec,styles.shadowProp]}>
                <View style={{flexDirection : 'row'}}>
                    <View>
                        <Image style={styles.foto} source={{uri : rec.uri}}/>
                    </View>
                    <View style={{
                        width : 230,
                    }}>
                        <Text style={styles.titulo}>{rec.Nombre}</Text>
                        <Text style={{
                            marginLeft : 10,
                            fontFamily : 'uber-move'
                        }}>{rec.disponible}</Text>
                        < >
                            <View>
                            <Text style={{
                            marginLeft : 10,
                            color : 'black',
                            fontFamily : 'uber-move',
                            marginTop : 3,
                        }}>{rec.valor}</Text>
                            </View>
                        </>
                    </View>
                    <View style={{
                        justifyContent : 'center',
                        alignItems : 'center',
                        
                        
                        
                    }} >
                        <Add name="add-circle-outline" size={30} style={{
                            color : 'red',
                        }}/>
                    </View>
                </View>
            </View>
        ))}
        </ScrollView>
        </View>
        <View style={{
            alignItems : 'center',
        }}>
            <TouchableOpacity style={styles.pedidoBtn}>
                <View style={{
                    flexDirection : 'row',
                    textAlign  : 'center',
                    justifyContent : 'center'
                }}>
                    <Text style={{
                        color : 'white',
                        textAlign : 'center',
                        fontWeight : 'bold',
                        fontSize : 17,
                        fontFamily : 'uber-move'
                    }}>Pedido</Text>
                    <SecodIcon name="shoppingcart" type="AntDesign" size={20} style={{color : 'white'}}/>
                </View>
            </TouchableOpacity>
        </View>
     </View>
    )
}

const styles = StyleSheet.create({
    mesa :{
        fontSize :30,
        fontWeight : 'bold',
        margin: 20,
        marginLeft : 20,
        marginTop : 40,
        fontFamily : 'uber-move',
    },
    contenedor :{
        width: '100%',
        height : '95%',

    },
    rec: {
        padding : 16,
        margin : 4,
        flexDirection : 'row',
        borderRadius : 20,
        backgroundColor : 'white'
        
    },
    foto : {
        width : 80,
        height : 80,
    },
    titulo : {
        fontWeight : 'bold',
        fontSize : 20,
        marginLeft : 10,
        fontFamily : 'uber-move'
    },
    pedidoBtn :{
        marginTop :20,
        backgroundColor : 'black',
        width : '50%',
        padding : 15,
        borderRadius : 8,
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
      },
})


export default Pedido