import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // width: WIDTH / 2,
    width: '100%',
    position: 'relative',
  },
  favouriteBtn: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    left: 10,
    top: 10,
    padding: 5,
    borderRadius: 999,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F8F9FB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  info: {},
  addBtn: {},
  price: {
    color: Colors.grey,
    fontWeight: '600',
  },
  title: {
    fontWeight: '400',
    color: Colors.titleGrey,
  },
});

export default styles;
