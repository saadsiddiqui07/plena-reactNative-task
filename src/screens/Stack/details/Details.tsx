import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../constants/Colors';
import {Product} from '../../../interfaces/product';
import {useAtom} from 'jotai';
import {cartAtom} from '../../../atoms/cartAtom';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const DetailsScreen = ({navigation, route}: any) => {
  const {id} = route.params;
  const [product, setProduct] = useState<Product>();
  const [cart, setCart] = useAtom(cartAtom);

  const handleAddToCart = () => {
    const prodcutToAdd = {
      ...product!,
      isFavourite: product?.isFavourite,
      quantity: 1,
    };
    setCart([...cart, prodcutToAdd]);
  };

  useEffect(() => {
    const handleFetchDetaills = async (productId: number) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetchDetaills(id);
  }, [id]);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" color={Colors.grey} size={18} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigation.navigate('Cart')}>
          {/* <Ionicons name="cart-outline" color={'white'} size={25} /> */}
          <SimpleLineIcons name="bag" color={Colors.grey} size={28} />
          <View style={styles.count}>
            <Text style={styles.cartCount}>{cart.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <Text style={styles.category}>{product?.category}</Text>
        <Text style={styles.title}>{product?.title}</Text>
        <View>
          <AntDesign name="star" color={'gold'} size={22} />
        </View>
        <View style={styles.images}>
          <FlatList
            data={product?.images}
            pagingEnabled
            horizontal
            snapToAlignment="center"
            renderItem={({item}) => (
              <Image source={{uri: item}} style={styles.image} />
            )}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.price}>${product?.price}</Text>
          <View style={styles.discount}>
            <Text style={styles.percent}>
              %{product?.discountPercentage} OFF
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
            <Text style={styles.addBtnText}>Add To Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>Details</Text>
          <Text style={styles.detailText}>{product?.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
