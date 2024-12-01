import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const ProductCard = ({ image, title }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);

  console.log('Constructor');

  useEffect(() => {
    console.log('Component did mount');

    console.log('Render');

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProducts([
        { id: '1', title: 'BELINDA TUNIK BATIK Batik Klasik Solo', image: 'https://i.pinimg.com/736x/e5/49/6d/e5496d0dac88022fbcd27f3f784d6ba1.jpg' },
        { id: '2', title: 'AURORA TUNIK BATIK GARUTAN', image: 'https://i.pinimg.com/736x/c7/f1/29/c7f1297fb942ec420bb3acb917abaf2d.jpg' },
        { id: '3', title: 'LANGITJUA BATIK SOLO', image: 'https://i.pinimg.com/736x/64/19/6c/64196cf5942df72e91218fb27762388b.jpg' },
        { id: '4', title: 'Tunik Batik Cap BATIK KLASIK SOLO', image: 'https://i.pinimg.com/736x/b5/9d/05/b59d05279a35c234172c14b992b443bd.jpg' },
        { id: '5', title: 'ATASAN BATIK JAWA', image: 'https://i.pinimg.com/736x/3e/6b/07/3e6b07af6893b7acd2c138e4946d3f7e.jpg' },
        { id: '6', title: 'ATASAN BATIK SRAGEN', image: 'https://i.pinimg.com/736x/d7/37/b4/d737b44bf19f560e64041e5cbbb16c77.jpg' },
      ]);
      console.log('component did updated');
    };

    fetchData();

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      console.log('Component did update');
    }
  }, [products]);

 
  console.log('Render');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pupu Store</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductCard image={item.image} title={item.title} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#3b5998',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});

export default ProductListScreen;
