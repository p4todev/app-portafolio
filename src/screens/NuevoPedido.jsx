import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import AppBar from '../components/AppBar';
import datatest from '../dataTest/data';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SecodIcon from 'react-native-vector-icons/AntDesign'
import Add from 'react-native-vector-icons/Ionicons'
import data from '../dataTest/data';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const Pedido = ()=>{

    const [dataPlatos,setData] = useState([]);
    //"http://localhost:3000/platos"
    //https://api.coindesk.com/v1/bpi/currentprice.json

    useEffect(()=>{
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then((json)=>setData(json))
        .then(console.log( "***** JSON: " + dataPlatos.chartName))
        .catch((error)=>console.log( "***** MENSAJE DE ERROR: " + error))
    },[])

  
    const categorias = [
  
    {
        status : 'Entrada',
    },
    {
        status : 'Fondo',
    },
    {
        status: 'Ensaladas',
    },
    {
        status : 'Licores',
    },
    {
        status : 'Jugos',
    },
    {
        status : 'Postres',
    },
    {
        status : 'Extras',
    },
    {
        status : 'Promociones',
    },
    ];


    const pedido =[{
        
    }]

    const [status, setStatus] = React.useState(false);
    const [dataList,setDataList] = React.useState(datatest);
    const setSatatusFilter = status => {
        if(status !== 'Todo'){
            setDataList([...datatest.filter(e=>e.status===status)])
        }else{
            setDataList(datatest)
        }
        setStatus(status)
    }

    const renderItem = ({item,index}) => {

        return (
            <View key={item} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.rec,styles.shadowProp]}>
                        <View>
                            <Image style={styles.foto} source={{uri : item.uri}}/>
                        </View>
                        <View  style={{
                        width : 230,
                    }}>
                            <Text style={styles.titulo}>{item.Nombre}</Text>
                            <Text style={{
                                marginLeft : 10,
                                fontFamily : 'uber-move'
                            }}>{item.disponible}</Text>
                            <Text style={{
                                marginLeft : 10,
                                color : 'black',
                                fontFamily : 'uber-move',
                                marginTop : 3,
                            }}>{item.valor}</Text>
                        </View>
                        <View style={{
                            justifyContent : 'center',
                            alignItems : 'center',
                        }}>
                        <Add name="add-circle-outline" size={30} style={{color : 'red',}} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

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
        
        
        <View style={styles.bar}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    categorias.map(e=>(
                        <View>
                            <TouchableOpacity style={[styles.elemento,status===e.status && styles.elementoActive]}
                            onPress={()=>setSatatusFilter(e.status)}>
                                <Text style={[styles.categoria,status===e.status && styles.categoriaActive]}>{e.status}</Text>
                            </TouchableOpacity>
                        </View>       
                    ))
                }
            </ScrollView>
        </View>

        <FlatList FlatList data={datatest} keyExtractor={(e,i)=>i.toString()}
            renderItem={renderItem}>
       
        </FlatList>

     </View>
    )
}

const styles = StyleSheet.create({
    bar : {
        flexDirection : 'row',
        backgroundColor : 'white',
        padding: 10,
        border : '1px solid #eaeaea',
    },
    elementoActive : { 
        backgroundColor : '#aa86f7'
    },
    elemento :{
        width : 100,
        height : 40,
        justifyContent : 'center',
        borderRadius : 20,
        alignItems : 'center',
        
    },
    categoriaActive : {
        fontWeight : 'bold',
        color : 'white',
        borderStartColor : 'white',

    },
    categoria : {
        
        fontFamily : 'uber-move',
        fontSize : 15,
        color : 'black'

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
        marginBottom : 20,
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