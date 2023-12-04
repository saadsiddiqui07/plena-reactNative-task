import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/home/header/Header';
import styles from './styles';
import Colors from '../../../constants/Colors';
import Banners from '../../../components/home/banners/Banners';
import ProductItem from '../../../components/home/product/ProductItem';
import {Product} from '../../../interfaces/product';

const HomeScreen = ({navigation}: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      if (data) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={Colors.primary} />
      <Header navigation={navigation} />
      <FlatList
        data={products}
        keyExtractor={data => `${data.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
        // ListHeaderComponent={<Banners />}
        numColumns={2}
        style={{flex: 1}}
        renderItem={({item}) => (
          <ProductItem item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
