import React from 'react';
import {StyleSheet,View,Text, ScrollView} from 'react-native'

const Mesasbar = () =>{
    const tipo= ["Fuera","Dentro"];
    return(
        <View>
            <ScrollView>
                <Text>Dentro</Text>
                <Text>Fuera</Text>
            </ScrollView>
        </View>
    )
}

export default Mesasbar;