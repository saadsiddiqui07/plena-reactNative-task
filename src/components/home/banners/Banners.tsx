import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const d = [...Array(5)];

const Banners = () => {
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={d}
        renderItem={() => (
          <View style={styles.banner}>
            <Image
              // style={styles.image}
              source={require('../../../assets/image-placeholder.png')}
            />
            <View style={styles.details}>
              <Text style={styles.firstText}>Get</Text>
              <Text style={styles.secondText}>50% OFF</Text>
              <Text style={styles.thirdText}>on first 03 order</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.recommended}>Recommended</Text>
    </View>
  );
};

export default Banners;
