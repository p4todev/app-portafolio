import React, { useEffect, useState } from 'react';
import { ActivityIndicator,StyleSheet, FlatList, Text, View ,Image,TouchableWithoutFeedback,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Add from 'react-native-vector-icons/Ionicons'

export default Test = () => {
  const [isLoading, setLoading] = useState([]);
  const [data, setData] = useState([]);

  const getPlatos = async () => {
     try {
      const response = await fetch('http://192.168.249.1:3000/platos');
      const json = await response.json();
      setData(json);
      setDataFiltrada(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPlatos();
  }, []);

  const [status, setStatus] = React.useState(false);
  const [dataFiltrada, setDataFiltrada] = useState([]);


  const setStatusFilter = status => {

    if(status == 'Entrada'){
      setDataFiltrada([...data.filter(e=>e.status===4)])
      setStatus('Entrada')
    }
    else if(status == 'Fondo'){
      setDataFiltrada([...data.filter(e=>e.status===5)])
      setStatus('Fondo')
    }
    else if(status == 'Ensaladas'){
      setDataFiltrada([...data.filter(e=>e.status===3)])
      setStatus('Ensaladas')
    }
    else if(status == 'Licores'){
      setDataFiltrada([...data.filter(e=>e.status===6)])
      setStatus('Licores')
    }
    else if(status == 'Jugos'){
      setDataFiltrada([...data.filter(e=>e.status===2)])
      setStatus('Jugos')
    }
    else if(status == 'Postres'){
      setDataFiltrada([...data.filter(e=>e.status===1)])
      setStatus('Postres')
    }
  }

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
    // {
    //     status : 'Extras',
    // },
    // {
    //     status : 'Promociones',
    // },
  ];

  return (

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
                            onPress={()=>setStatusFilter(e.status)}>
                                <Text style={[styles.categoria,status===e.status && styles.categoriaActive]}>{e.status}</Text>
                            </TouchableOpacity>
                        </View>       
                    ))
                }
            </ScrollView>
      </View>
      
      <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={dataFiltrada}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.rec,styles.shadowProp]}>
                        <View>
                            <Image style={styles.foto} source={{uri : item.foto}}/>
                        </View>
                        <View  style={{
                        width : 230,
                    }}>
                            <Text style={styles.titulo}>{item.nombre}</Text>
                            <Text style={{
                                marginLeft : 10,
                                fontFamily : 'uber-move'
                            }}>{'Disponible'}</Text>
                            <Text style={{
                                marginLeft : 10,
                                color : 'black',
                                fontFamily : 'uber-move',
                                marginTop : 3,
                            }}>{'$ '+item.precio}</Text>
                        </View>
                        <View style={{
                            justifyContent : 'center',
                        }}>
                        <Add name="add-circle-outline" size={15} style={{color : 'red',}} />
                        </View>
                    </View>
              </ScrollView>
            </View>

          )}
        />
      )}
      </View>

    </View>


  );

};

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
      fontSize : 15,
      marginLeft : 10,
      marginRight : 15,
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