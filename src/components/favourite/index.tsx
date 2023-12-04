import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import {useAtom} from 'jotai';
import {Product} from '../../interfaces/product';
import {favouriteAtom} from '../../atoms/favouriteAtom';
import Colors from '../../constants/Colors';
import {truncateText} from '../../utils';

interface Props {
  item: Product;
  navigation: any;
}

const FavouriteItem = ({item, navigation}: Props) => {
  const [favList, setFavList] = useAtom(favouriteAtom);

  const addToFavourites = (product: Product) => {
    const prodcutToAdd = {
      ...product!,
      isFavourite: true,
      quantity: product.quantity,
    };
    setFavList([...favList, prodcutToAdd]);
  };

  const isFavourite = favList.find((obj: Product) => obj.id === item.id);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate('Details', {id: item.id})}>
      <TouchableOpacity
        style={styles.favouriteBtn}
        onPress={() => addToFavourites(item)}>
        <Ionicons
          name={isFavourite ? 'heart' : 'heart-outline'}
          color={Colors.favouriteBtn}
          size={20}
        />
      </TouchableOpacity>
      <Image
        source={{uri: item.thumbnail}}
        resizeMode="cover"
        resizeMethod="auto"
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.info}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.title}>{truncateText(item.title!, 15)}</Text>
        </View>
        {/* <TouchableOpacity>
          <Ionicons
            name="close-outline"
            size={30}
            color={'red'}
            style={styles.addBtn}
          />
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteItem;
