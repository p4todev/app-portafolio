import Raact from 'react'
import {StyleSheet,View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'


const PedidoEnviado = ()=>{
    return(
        <View >
            <View style={{
                justifyContent : 'center',
                alignItems : 'center',
            }}>
                <Icon name="checkcircleo" size={240} style={styles.icono}/>
            </View>
            <View>
                <Text style={styles.texto}>Se ha realizado el pedido!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icono : {
        marginBottom : 20,
        color : 'green',
    },
    texto : {
        fontSize : 22,
        fontWeight : 'bold',
        fontFamily : 'uber-move',

    }
});


export default PedidoEnviado