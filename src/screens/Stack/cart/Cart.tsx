import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Colors from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAtomValue} from 'jotai';
import {cartAtom} from '../../../atoms/cartAtom';
import CartItem from '../../../components/cart/CartItem';
import Subtotal from '../../../components/checkout/Subtotal';

const CartScreen = ({navigation}: any) => {
  const cart = useAtomValue(cartAtom);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" color={Colors.grey} size={18} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Shopping Cart ({cart.length})</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={item => `data-${item.id}`}
        renderItem={({item}) => <CartItem item={item} />}
        contentContainerStyle={styles.cart}
      />
      <Subtotal navigation={navigation} />
    </SafeAreaView>
  );
};

export default CartScreen;
