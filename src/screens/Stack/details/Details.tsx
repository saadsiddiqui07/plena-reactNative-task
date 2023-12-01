import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../constants/Colors';
import {Product} from '../../../interfaces/product';
// import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
// import {HEIGHT} from '../../../constants/Dimensions';

// const {height, width} = Dimensions.get('window');

// const HEGHT = height / 3;

const DetailsScreen = ({navigation, route}: any) => {
  const {id} = route.params;
  // const ref = useRef<ICarouselInstance>(null);

  const [product, setProduct] = useState<Product>();
  console.log(product);

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
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" color={Colors.grey} size={18} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" color={Colors.grey} size={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <Text style={styles.category}>{product?.category}</Text>
        <Text style={styles.title}>{product?.title}</Text>
        <View>
          {/* {Array(product?.rating.toFixed(1)
            .fill()
            .map((_, i) => (
              <AntDesign key={i} name="star" color={Colors.grey} size={28} />;
            ))} */}

          <AntDesign name="star" color={'gold'} size={22} />
        </View>
        <View style={styles.images} />
        <View style={styles.info}>
          <Text style={styles.price}>${product?.price}</Text>
          <View style={styles.discount}>
            <Text style={styles.percent}>
              %{product?.discountPercentage} OFF
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.addBtn}>
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
        {/* <Carousel
            ref={ref}
            data={product?.images!}
            width={width}
            height={HEIGHT}
            renderItem={({item, index}) => (
              <Image
                key={index}
                source={{uri: item}}
                width={width}
                height={300}
              />
            )}
          /> */}
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
