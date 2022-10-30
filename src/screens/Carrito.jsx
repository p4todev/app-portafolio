import React from 'react' 
import {StyleSheet,View,Text,ScrollView,Image,Modal,Button,TextInput,TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import datatest from '../dataTest/data'
import Add from 'react-native-vector-icons/EvilIcons'
import Minus from 'react-native-vector-icons/EvilIcons'
import AppBar from '../components/AppBar'

const Carrito = ()=>{
    const [modalVisible,setModalVisible] = React.useState(false);
    const [aumentarValor,setAumentarValor] = React.useState(pedido)

    {/*TODO: buscar la forma de incrementar y decramentar, ademas de que si el valor es = 0, preguntar con
    una notificacion si de desea eliminar el producto.    
    */} 

    const pedido = [{
        uri : 'https://www.gourmet.cl/wp-content/uploads/2018/04/Foto-editada-1.jpg',
        nombre : 'Sopa de pollo',
        valor : '$9.999',
        cantidad : 1,
    },
    {
        uri : 'https://www.gourmet.cl/wp-content/uploads/2018/04/Sopa-editada.jpg',
        nombre : 'Sopa de verduras',
        valor : '$9.999',
        cantidad : 1,
    }]
 
    const sumar = (item,name)=>{
        if(item.nombre === name){
            setAumentarValor(valor=> item.valor + 1)
        }
    }

    const restar = ()=>{
        setAumentarValor(valor => valor - 1); 
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
                        <Minus name="minus" size={30} style={[styles.icono,styles.shadowProp]}
                        onPress={()=>restar()}
                        
                        />
                        <Text name={rec.nombre} style={[styles.cantidad,styles.shadowProp]}>{rec.cantidad}</Text>
                        <Add name="plus" size={30} style={[styles.icono,styles.shadowProp]} 
                        />
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
                    <Text style={{color: 'black',fontSize : 20}}>$9.999.999</Text>
                </View>
            </View>
        </View>
            <View style={{
                justifyContent : 'center',
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
                    }}>Enviar</Text>
                </View>
            </TouchableOpacity>
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