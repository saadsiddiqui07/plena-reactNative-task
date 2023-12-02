import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '../../../interfaces/product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Colors from '../../../constants/Colors';
import {truncateText} from '../../../utils';
import {cartAtom} from '../../../atoms/cartAtom';
import {useAtom} from 'jotai';

interface Props {
  item: Partial<Product>;
  navigation: any;
}

const ProductItem = ({item, navigation}: Props) => {
  const [products, setProducts] = useAtom(cartAtom);

  const addProcuctToCart = (added: Product) => {
    setProducts([...products, added]);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate('Details', {id: item.id})}>
      <TouchableOpacity style={styles.favouriteBtn}>
        <Ionicons name="heart-outline" color={Colors.favouriteBtn} size={20} />
      </TouchableOpacity>
      <Image
        source={{uri: item.thumbnail}}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.info}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.title}>{truncateText(item.title!, 15)}</Text>
        </View>
        <TouchableOpacity onPress={() => addProcuctToCart(item)}>
          <Ionicons
            name="add-circle"
            size={30}
            color={Colors.primary}
            style={styles.addBtn}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
