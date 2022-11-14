import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity,TouchableWithoutFeedback, ScrollView,Image,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {LinearGradient} from 'expo-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Main = () => {

    const userTest = [{
        "user" : "Patricio",
        "pass" : "admin"
    }];

    const recomendacionHoy = [{
        "Nombre" : "Pizza",
        "ValorHoy" : "$6.999",
        "color" : "#aa86f7",
        "ubi" : "./../assets/img/pizza.png",
    },
    {
        "Nombre" : "Hamburguesa",
        "ValorHoy" : "$4.999",
        "color" : "#6effba",
        "ubi" : "./../assets/img/pizza.png",
    },
    {
        "Nombre" : "Ensaladas",
        "ValorHoy" : "$3.999",
        "color" : "#ffc880",
        "ubi" : "./../assets/img/pizza.png",
    }]

    return (
        <View style={styles.container}>
            <View style={{alignItems : 'center',
                          marginTop : 20,}}>
                <View style={styles.foto}></View>
                {userTest.map(user=>(
                    <Text style={styles.titulo}>Bienvenido, {user.user}!</Text>
                ))}
                <TouchableWithoutFeedback onPress={()=>{console.log('soy el perfil')}}>
                    <Text style={styles.subtitulo}>Ver perfil</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{
                justifyContent : 'center',
                alignItems : 'center',
            }}>
                    <View style={styles.monitoreo}>
                        <LinearGradient 
                                        style={{width:'100%',height:'100%',borderRadius : 10,}}
                                        colors={['black', '#333','#666']}
                                        start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}>
                            <View style={{flexDirection : 'column', alignItems : 'flex-start',padding : 10,marginLeft : 15,marginTop : 5,}}>
                                <View >
                                </View>
                                <Text style={{
                                    color : 'white',
                                    fontFamily : 'uber-move',
                                    fontSize : 25,
                                    fontWeight : 'bold',
                                    marginLeft : 2,
                                }}
                                    >Reporte mensual
                                </Text>
                                <Text style={{
                                    color : 'white',
                                    fontFamily : 'uber-move',
  
                                    marginLeft : 5,
                                }}>
                                    revisa aca tus estadisticas de cada mes
                                </Text>
                            </View>
                            <View>
                               <TouchableWithoutFeedback >
                                <View style={styles.matbtn} >
                                     <View style={{flexDirection : 'row',alignItems : 'center',}}>
                                         <Text style={{color : 'black',fontSize : 14, marginLeft : 16,fontWeight : 'bold'}}>Revisar ahora</Text>
                                         <AntDesign name="arrowright" size={30} style={{padding : 7,color : 'black'}}/>
                                     </View>
                                 </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </LinearGradient>
                    </View>
                    <View>
                        <View style={{
                            alignItems : 'center',
                        }}>
                            <Text style={{
                                    color : 'black',
                                    fontFamily : '',
                                    fontSize : 25,
                                    fontWeight : 'bold',
                                    marginLeft : 0,
                                    marginTop : 15,
                                }}>Que recomendar hoy</Text>
                        </View>
                        <View style={{
                            flexDirection : 'row',
                            width : '85%'
                        }}>
                            <ScrollView horizontal>
                                <View style={{flexDirection : 'row', margin : 20,alignItems : 'center'}}>
                                    {
                                        recomendacionHoy.map(reco=>(
                                            <View style={styles.recomendacion} backgroundColor={reco.color}>
                                                <Image source={require('../../assets/img/pizza.png')} style={{width : 50, height : 50,marginBottom : 4}}/>
                                                <Text style={{color : 'black',fontFamily : 'uber-move', fontWeight : 'bold',fontSize : 17}}>{reco.Nombre}</Text>
                                                <Text style={{color : '#222', fontFamily : 'uber-move'}}>{reco.ValorHoy}</Text>
                                            </View>
                                        )) 
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    recomendacion : {
        margin : 10,
        width : 120,
        height : 120,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        
    },
    matbtn : {
        width : 200,
        height : 45,
        backgroundColor : 'white',
        marginLeft : 27,
        marginTop : 5,
        borderRadius : 30,
        

    },
    monitoreo: {
        width : 350,
        height : 150,
        backgroundColor : 'black',
        borderRadius : 8,
        marginTop : 60,
    },
    textBtn : {
        color : 'white',
        fontSize : 17,
        textAlign : 'center',
    },
    container : {
        height : '100%',
        width : '100%',
    },
    titulo : {
     textAlign : 'center',
     color : 'black',
     fontWeight : 'bold',
     fontFamily : 'uber-move'
    },
    subtitulo : {
        textAlign : 'center',
        color : '#666',
        fontFamily : 'uber-move',
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
    botonera : {
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        bottom : 150,
        right : 0,
        left : 0,
    },
    foto : {
        width : 50,
        height : 50,
        backgroundColor : '#999',
        borderRadius : 50,
        marginTop : 50,
        marginBottom : 10,
    }
});

export default Main