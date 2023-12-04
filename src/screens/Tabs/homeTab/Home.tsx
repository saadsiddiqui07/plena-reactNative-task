import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/home/header/Header';
import styles from './styles';
import Colors from '../../../constants/Colors';
import Banners from '../../../components/home/banners/Banners';
import ProductItem from '../../../components/home/product/ProductItem';
import {Product} from '../../../interfaces/product';
import {View} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  // const itemsToLoad = 6;

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

  const renderLoader = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="small" color={Colors.grey} />
      </View>
    );
  };

  // const handleEndReached = () => {
  //   fetchProducts();
  // };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={Colors.primary} />
      <Header navigation={navigation} />
      <FlatList
        data={products}
        keyExtractor={data => `${data.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
        ListHeaderComponent={<Banners />}
        numColumns={2}
        ListEmptyComponent={renderLoader}
        style={{flex: 1}}
        renderItem={({item}) => (
          <ProductItem item={item} navigation={navigation} />
        )}
        // onEndReached={() => console.log('Reached')}
        // onEndReachedThreshold={0.5}
        // ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
