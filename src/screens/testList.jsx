import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View ,Image} from 'react-native';

export default Test = () => {
  const [isLoading, setLoading] = useState([]);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('http://192.168.249.1:3000/platos');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
                <Text>{item.id},{item.nombre},{item.precio}</Text>
                <Image style={{width:5,height:5}} source={{uri : item.foto}}/>
            </View>

          )}
        />
      )}
    </View>
  );
};