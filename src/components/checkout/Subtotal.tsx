import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Subtotal = () => {
  return (
    <View style={styles.subTotal}>
      <View style={styles.container}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.price}>$2300</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Delivery</Text>
        <Text style={styles.price}>$10</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.price}>$2310</Text>
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.btnText}>Proceed To Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Subtotal;
