import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAtomValue} from 'jotai';
import {cartAtom} from '../../../atoms/cartAtom';

const Header = () => {
  const cart = useAtomValue(cartAtom);
  console.log('Length', cart.length);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hey, Saad</Text>
        <TouchableOpacity>
          <Text>{cart.length}</Text>
          <Ionicons name="cart-outline" color={'white'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.textInput}>
        <Ionicons name="search-outline" color={'#8891A5'} size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search Products or Store"
          placeholderTextColor={'#8891A5'}
        />
      </View>
      <View style={styles.headerDetails}>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Delivery to</Text>
          <TouchableOpacity style={styles.details}>
            <Text style={styles.detailsText}>Green Way 3000, Sylhet</Text>
            <Ionicons name="chevron-down-outline" color={'#8891A5'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Within</Text>
          <TouchableOpacity style={styles.details}>
            <Text style={styles.detailsText}>1 Hour</Text>
            <Ionicons name="chevron-down-outline" color={'#8891A5'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
