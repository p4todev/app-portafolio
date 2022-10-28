import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import datatest from '../dataTest/data';


const AppBar = ()=>{

    const categorias = ["Entrada","Fondo","Licores","Postres","Extras","Promociones"];

    return(
        
        <View style={styles.bar} >
            <ScrollView showsHorizontalScrollIndicator={false} horizontal >
                {categorias.map(categoria=>(
                    <View >
                        <Text style={styles.categoria}>{categoria}</Text>
                    </View>
                ))}
            </ScrollView>
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
    categoria : {
        margin : 10,
        fontWeight : 'bold',
        fontFamily : 'uber-move',
        fontSize : 17,

    }
});


export default AppBar