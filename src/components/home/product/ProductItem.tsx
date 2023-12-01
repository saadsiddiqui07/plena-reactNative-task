import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '../../../interfaces/product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Colors from '../../../constants/Colors';
import {truncateText} from '../../../utils';

interface Props {
  item: Partial<Product>;
}

const ProductItem = ({item}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => console.log(item.id)}>
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
        <TouchableOpacity>
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
