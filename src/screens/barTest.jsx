import React from 'react'
import {StyleSheet,View,Text,ScrollView, TouchableOpacity, FlatList} from 'react-native'

const listTab = [
    {
    status : 'All'
    
    },
    {
    status : 'rojo'
    },
    {
    status : 'verde'
    }
]

const data = [
{
    name : "Cristiano ronaldo",
    status : 'rojo'
},
{
    name : "Messi",
    status : 'verde'
},
{
    name : "Navas",
    status : 'rojo'
},
{
    name : "Mbappe",
    status : 'verde'
},
{
    name : "Alexis sanchez",
    status : 'rojo'
},
]


const testBar = ()=>{
    const [status, setStatus] = React.useState(false);
    const [dataList,setDataList] = React.useState(data);
    const setSatatusFilter = status => {
        if(status !== 'All'){
            setDataList([...data.filter(e=>e.status===status)])
        }else{
            setDataList(data)
        }
        setStatus(status)
    }

    const renderItem = ({item,index}) => {
        return (
            <View key={item} style={styles.itemContainer}>
                <View>
                    <Text>{item.name}</Text>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.barContenedor}>
            <ScrollView horizontal style={{}}>
                <View style={styles.data}>
                    {listTab.map(list=>(
                        <TouchableOpacity style={[styles.elemento,status===list.status && styles.btnActive]}
                        onPress={()=>setSatatusFilter(list.status)}
                        >
                            <Text style={[styles.textbar,status===list.status && styles.textActive]}>{list.status}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <FlatList data={dataList} keyExtractor={(e,i)=>i.toString()}
            renderItem={renderItem}
            >

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer : {
        flexDirection : 'row',
        paddingVertical : 15,
    },
    textActive : {
        color: 'white',
        fontWeight : 'bold'
    },
    btnActive : {
        backgroundColor : 'pink'
    },
    barContenedor : {
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'center',
    },
    elemento :{
      
        width : 100,
        height : 30,
        justifyContent : 'center',
        borderRadius : 8,
        
    },
    data : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
    },
    textbar : {
        textAlign : 'center',
        fontFamily : 'uber-move',
    }

})

export default testBar