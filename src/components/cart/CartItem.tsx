import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '../../interfaces/product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Colors from '../../constants/Colors';
import {truncateText} from '../../utils';

interface CartItemProps {
  item: Partial<Product>;
}

const CartItem = ({item}: CartItemProps) => {
  return (
    <View style={styles.item}>
      <Image
        source={{uri: item.thumbnail}}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{truncateText(item.title!, 20)}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.quantity}>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="remove-outline" color={Colors.grey} size={18} />
        </TouchableOpacity>
        <Text style={styles.quantityCount}>2</Text>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="add-outline" color={Colors.grey} size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
