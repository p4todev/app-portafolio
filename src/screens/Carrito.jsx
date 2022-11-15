import React from 'react' 
import {StyleSheet,View,Text,ScrollView,Image,Modal,Button,TextInput,TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import datatest from '../dataTest/data'
import Add from 'react-native-vector-icons/EvilIcons'
import Minus from 'react-native-vector-icons/EvilIcons'
import AppBar from '../components/AppBar'

const Carrito = ()=>{
    const [modalVisible,setModalVisible] = React.useState(false);
    const [aumentarValor,setAumentarValor] = React.useState(1)

    {/*TODO: buscar la forma de incrementar y decramentar, ademas de que si el valor es = 0, preguntar con
    una notificacion si de desea eliminar el producto.    
    */} 

    const pedido = [{
        uri : 'https://www.gourmet.cl/wp-content/uploads/2018/04/Foto-editada-1.jpg',
        id : 1,
        nombre : 'Sopa de pollo',
        valor : 9.999,
        cantidad : aumentarValor, //,
    },
    {
        uri : 'https://www.gourmet.cl/wp-content/uploads/2018/04/Sopa-editada.jpg',
        id : 2,
        nombre : 'Sopa de verduras',
<<<<<<< HEAD
        valor : 8.999,
        cantidad : aumentarValor,
    },
    {
        uri : 'https://www.gourmet.cl/wp-content/uploads/2018/04/Sopa-editada.jpg',
        id : 2,
        nombre : 'Sopa de verduras',
        valor : 8.999,
        cantidad : aumentarValor,
    },]
=======
        valor : '$9.999',
        cantidad : 1,
    },
    {
        uri : 'https://www.gourmet.cl/wp-content/uploads/2018/04/Sopa-editada.jpg',
        nombre : 'Sopa de pato',
        valor : '$9.999',
        cantidad : 1,
    }]
>>>>>>> Oscar
 
    const sumar = (item)=>{
        let total = 0;
        pedido.forEach(pedido=>{
            total = total + pedido.valor;
        })

        return total;
    }

    return(
        <View style={styles.contenedor}>
            <View style={{

            }}>
                <View>
                    <Text style={styles.mesa}>Pedido Mesa 1</Text>
                </View>
                <Modal 
                transparent
                animationType='slide'
                visible={modalVisible}
                onRequestClose={()=> setModalVisible(false)}
                >
                    <View style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        backgroundColor : 'white',
                        position : 'absolute',
                        width : '100%',
                        height : 400,
                        bottom : 0,
                        borderWidth: 1,
                        borderTopLeftRadius : 20,
                        borderTopRightRadius : 20,
                        borderColor : 'grey',
                        padding : 20,
                    }}>
                        <View style={{
                            width : '100%',
                            height : '100%',
                        }}>
                            <Text style={{
                                fontFamily : 'uber-move',
                                fontSize : 25,
                            }}>Agregar comentario</Text>
                            <TextInput multiline={true} style={{
                                borderWidth : 1,
                                height : '40%',
                                paddingLeft : 10,
                                paddingTop : 10,
                                borderRadius : 20,
                                marginTop : 20,
                                borderColor : 'white',
                                backgroundColor : 'white',
                                shadowColor: "grey",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,
                                elevation: 3,

                            }} placeholder='Agrega tu comentario'/>
                            <View style={styles.btn}>
                                <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                                <Text style={{color : 'white', fontWeight : 'bold',textAlign : 'center',fontFamily : 'uber-move',width : '100%'}}>Agregar</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View> 
                    </View>
                </Modal >

            <View style={{
                height : '65%',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
        {pedido.map(rec=>(
            <View style={[styles.rec,styles.shadowProp]}>
                <View style={{flexDirection : 'row'}}>
                    <View>
                        <Image style={styles.foto} source={{uri : rec.uri}}/>
                    </View>
                    <View style={{
                        width : 220,
                    }}>
                        <Text style={styles.titulo}>{rec.nombre}</Text>
                        <Text style={{
                            marginLeft : 10,
                            fontFamily : 'uber-move',
                            color : '#666'
                        }} onPress={()=>setModalVisible(true)} >Agregar comentario</Text>
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
                        flexDirection : 'row'                   
                    }} >
                      
                    </View>
                </View>
            </View>
        ))}
        </ScrollView>

        </View>
        <View style={[styles.totalContenedor,styles.shadowProp]}>
            <View style={{
                flexDirection : 'row',
                justifyContent : 'space-between',
                alignItems : 'center',
                height : '100%',
                
            }}>
                <View>
                    <Text style={{color : 'black', fontSize : 20}}>Total</Text>
                </View>
                <View>
                    <Text style={{fontSize:20}}>${sumar(pedido)}</Text>
                </View>
            </View>
        </View>

        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    totalContenedor : {
        backgroundColor : 'white',
        height : '10%',
        width : '95%',
        margin : 10,
        marginTop: 20,
  
        padding : 15,
    },  
    icono : {
        color : 'black',
    },
    cantidad : {
        fontWeight : 'bold',
        fontSize : 15,
        margin : 2,
        fontFamily : 'uber-move'
    },
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
      btn : {
        backgroundColor : 'black',
        marginTop : 40,
        padding: 15,
        color : 'white',
        textAlign : 'center',
        fontFamily : 'uber-move',
        borderRadius : 8,
        width : '100%',
        
      }
})
export default Carrito