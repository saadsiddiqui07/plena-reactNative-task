import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import {Product} from '../interfaces/product';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = createJSONStorage<any>(() => AsyncStorage);

export const cartAtom = atomWithStorage<Product[]>('cart', [], storage);
