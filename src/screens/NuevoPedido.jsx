import React from 'react';
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

const Pedido = ()=>{
    
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
    },];

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



        <FlatList FlatList data={dataList} keyExtractor={(e,i)=>i.toString()}
            renderItem={renderItem}>
       
        </FlatList>



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
        fontWeight : 'bold',
        fontFamily : 'uber-move',
        fontSize : 17,
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