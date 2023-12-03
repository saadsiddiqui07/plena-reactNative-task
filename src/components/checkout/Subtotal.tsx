import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAtom} from 'jotai';
import {cartAtom} from '../../atoms/cartAtom';
import {RESET} from 'jotai/utils';

const Subtotal = ({navigation}: any) => {
  const [cart, setCart] = useAtom(cartAtom);

  const getTotal = () => {
    let {total} = cart.reduce(
      (cartTotal, cartItem) => {
        const {price, quantity} = cartItem!;
        const itemTotal = price * quantity!;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
      },
    );
    return {
      total,
    };
  };

  const {total: subTotal} = getTotal();
  const total = subTotal + 10;

  const handleCheckout = () => {
    setCart(RESET);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.subTotal}>
      <View style={styles.container}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.price}>${subTotal}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Delivery</Text>
        <Text style={styles.price}>$10</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.price}>${total}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={handleCheckout}>
        <Text style={styles.btnText}>Proceed To Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Subtotal;
