import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '../../../interfaces/product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Colors from '../../../constants/Colors';
import {truncateText} from '../../../utils';
import {cartAtom} from '../../../atoms/cartAtom';
import {useAtom} from 'jotai';
import {favouriteAtom} from '../../../atoms/favouriteAtom';

interface Props {
  item: Product;
  navigation: any;
}

const ProductItem = ({item, navigation}: Props) => {
  const [cart, setCart] = useAtom(cartAtom);
  const [favList, setFavList] = useAtom(favouriteAtom);

  const isFavourite = favList.find((obj: Product) => obj.id === item.id);
  const isAdded = cart.find((obj: Product) => obj.id === item.id);

  const handleAddToFavourites = (product: Product) => {
    if (!isFavourite) {
      const prodcutToAdd = {
        ...product!,
        isFavourite: true,
        quantity: product.quantity,
      };
      setFavList([...favList, prodcutToAdd]);
    } else {
      const newList = favList.filter((obj: Product) => obj.id !== item.id);
      setFavList(newList);
    }
  };

  const handleAddToCart = () => {
    if (isAdded) {
      return;
    }
    const prodcutToAdd = {
      ...item!,
      isFavourite: item?.isFavourite,
      quantity: 1,
    };
    setCart([...cart, prodcutToAdd]);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate('Details', {id: item.id})}>
      <TouchableOpacity
        style={styles.favouriteBtn}
        onPress={() => handleAddToFavourites(item)}>
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
        <TouchableOpacity onPress={handleAddToCart}>
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
