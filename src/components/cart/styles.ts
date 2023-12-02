import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#EBEBFB',
  },
  image: {
    height: 60,
    width: 60,
    objectFit: 'cover',
    borderRadius: 20,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    gap: 5,
  },
  title: {
    color: Colors.grey,
    fontWeight: '600',
    fontSize: 15,
  },
  price: {
    color: Colors.grey,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  btn: {
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 999,
  },
  quantityCount: {
    color: '#000000',
    fontWeight: '600',
  },
});

export default styles;
