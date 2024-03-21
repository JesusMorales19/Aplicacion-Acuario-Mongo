import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Dimensions, SafeAreaView, StatusBar, Animated, TextInput } from 'react-native';

const carruselImagenes = [
  require("../assets/pecera5.png"),
  require("../assets/pecera6.png"),
  require("../assets/pecera7.png"),
  require("../assets/pecera8.png"),
];

const cuadriculaImagenes = [
  { image: require("../assets/pecera1.png"), description: "Pecera 1 - Descripción 1" },
  { image: require("../assets/pecera2.png"), description: "Pecera 2 - Descripción 2" },
  { image: require("../assets/pecera3.png"), description: "Pecera 3 - Descripción 3" },
  { image: require("../assets/pecera4.png"), description: "Pecera 4 - Descripción 4" },
];

const width = Dimensions.get("window").width;
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO = 2;

const HomeScreen = () => {
  const scrollX = useRef(new Animated.Value(ANCHO_CONTENEDOR)).current;
  const flatListRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      flatListRef.current.scrollToOffset({
        offset: scrollX._value + ANCHO_CONTENEDOR,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [scrollX]);

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: false,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <FlatList
        ref={flatListRef}
        data={carruselImagenes}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width: ANCHO_CONTENEDOR + ESPACIO * 6 }}>
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.posterImage} />
            </View>
          </View>
        )}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.floor(offset / ANCHO_CONTENEDOR) % carruselImagenes.length;
          scrollX.setValue(ANCHO_CONTENEDOR * (index + 1));
        }}
      />
      <View style={styles.gridContainer}>
        {cuadriculaImagenes.map((item, index) => (
          <View key={index} style={styles.gridItem}>
            <Image source={item.image} style={styles.gridImage} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  imageContainer: {
    marginHorizontal: ESPACIO,
    padding: ESPACIO,
    borderRadius: 34,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * .7,
    resizeMode: "cover",
    borderRadius: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  gridItem: {
    margin: 10,
    alignItems: 'center',
  },
  gridImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeScreen;
