import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAtom} from 'jotai';
import {favouriteAtom} from '../../../atoms/favouriteAtom';
import {FlatList} from 'react-native';
import FavouriteItem from '../../../components/favourite';
import {RESET} from 'jotai/utils';

const FavouriteScreen = ({navigation}: any) => {
  const [favList, setFavList] = useAtom(favouriteAtom);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.title}>Your favourites ({favList.length})</Text>
        <TouchableOpacity style={styles.btn} onPress={() => setFavList(RESET)}>
          <Text style={styles.btnText}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={favList}
          keyExtractor={data => `${data.id}`}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => (
            <FavouriteItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavouriteScreen;
