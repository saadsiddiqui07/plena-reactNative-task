import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '../../interfaces/product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Colors from '../../constants/Colors';
import {truncateText} from '../../utils';
import {useAtom} from 'jotai';
import {cartAtom} from '../../atoms/cartAtom';

interface CartItemProps {
  item: Partial<Product>;
}

const CartItem = ({item}: CartItemProps) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleIncreaseQuantity = () => {
    const tempCart = cart.map((cartItem: Product) => {
      if (cartItem.id === item.id) {
        cartItem = {...cartItem, quantity: cartItem.quantity! + 1};
      }
      return cartItem;
    });
    setCart(tempCart);
  };

  const handleDecreaseQuantity = () => {
    let newCart = [];
    if (item.quantity === 1) {
      newCart = cart.filter(cartItem => cartItem.id !== item.id);
    } else {
      newCart = cart.map((cartItem: Product) => {
        if (cartItem.id === item.id) {
          cartItem = {...cartItem, quantity: cartItem.quantity! - 1};
        }
        return cartItem;
      });
    }
    setCart(newCart);
  };

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
        <TouchableOpacity style={styles.btn} onPress={handleDecreaseQuantity}>
          <Ionicons name="remove-outline" color={Colors.grey} size={18} />
        </TouchableOpacity>
        <Text style={styles.quantityCount}>{item.quantity}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleIncreaseQuantity}>
          <Ionicons name="add-outline" color={Colors.grey} size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
