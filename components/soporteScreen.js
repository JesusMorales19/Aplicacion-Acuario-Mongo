import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const SoporteScreen = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get('http://172.20.103.17:3000/documento');
        console.log('Datos obtenidos:', response.data);
        setDatos(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    obtenerDatos(); // Llama a la función obtenerDatos para obtener los datos cuando el componente se monta
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Temperatura: {item.temperatura}</Text>
      <Text>Humedad: {item.humedad}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {datos.length > 0 ? (
        <FlatList
          data={datos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No se pudieron obtener los datos</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SoporteScreen;
