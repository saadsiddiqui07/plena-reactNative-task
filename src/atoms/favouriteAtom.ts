import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Product} from '../interfaces/product';

const storage = createJSONStorage<any>(() => AsyncStorage);

export const favouriteAtom = atomWithStorage<Product[]>(
  'favourites',
  [],
  storage,
);
