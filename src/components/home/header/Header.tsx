import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hey, Saad</Text>
        <Ionicons name="cart-outline" color={'white'} size={25} />
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
          <View style={styles.details}>
            <Text style={styles.detailsText}>Green Way 3000, Sylhet</Text>
            <Ionicons name="chevron-down-outline" color={'#8891A5'} size={20} />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Within</Text>
          <View style={styles.details}>
            <Text style={styles.detailsText}>1 Hour</Text>
            <Ionicons name="chevron-down-outline" color={'#8891A5'} size={20} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
