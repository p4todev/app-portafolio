import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    TextInput,
    TouchableOpacity} from 'react-native';


    const Login = ()=>{
        
        return(
            <View style={styles.container}>
                <View style={{alignItems : 'center'}} >
                    <View style={styles.foto}>
                    </View>
                </View>
                <Text style={styles.titulo}>Inicio sesion</Text>
                <View styles={{alignItems : 'center'}}>
                    <TextInput style={styles.inputs} placeholder='Ingresa tu rut' />
                    <TextInput style={styles.inputs} secureTextEntry={true} placeholder='Ingresa tu contraseña' />
                        <TouchableOpacity style={styles.boton} to='/main'><Text style={{
                            color : 'white',
                            textAlign : 'center',
                            fontWeight : 'bold',
                        }} >Ingresar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.pass}>Olvidaste la contraseña?, Click aqui!</Text>
                </View>
            </View>
            
        )
    }
    




    // ESTILOS
    const styles = StyleSheet.create({
        container : {
            marginTop : 100,
        },
        foto : {
            backgroundColor : '#999',
            width : 150,
            height : 150,
            borderRadius : 100,
        },
        titulo : {
            textAlign : 'center',
            fontWeight : 'bold',
            fontSize : 30,
            marginTop : 50,
            marginBottom : 10,
        },
        inputs : {
            padding : 10,
            marginLeft : 50,
            marginRight : 50,
            marginBottom : 15,
            borderWidth : 1,
            borderColor : '#999',
            borderRadius : 8,
            
        },
        boton : { 
            backgroundColor : 'black',
            textAlign : 'center',
            padding : 15,
            borderRadius : 8,
            marginRight : 50,
            marginLeft : 50,
        },
        pass : {
            color : '#3897FC',
            marginTop : 50,
            textAlign : 'center',
        }


    
    });
    


export default Login