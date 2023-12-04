import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {HEIGHT, WIDTH} from '../../../constants/Dimensions';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backBtn: {
    backgroundColor: 'lightgray',
    borderRadius: 999,
    padding: 10,
  },
  cart: {
    flexDirection: 'row',
    position: 'relative',
  },
  count: {
    backgroundColor: Colors.cardActiveColor,
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    top: 0,
    paddingHorizontal: 5,
  },
  cartCount: {
    // position: 'absolute',
    fontSize: 15,
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
  },
  details: {
    // padding: 18,
  },
  category: {
    color: Colors.grey,
    marginHorizontal: 18,
  },
  title: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 18,
  },
  ratings: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  images: {
    height: HEIGHT / 4,
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },
  favouriteBtn: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    right: 10,
    top: 10,
    padding: 5,
    borderRadius: 999,
  },
  image: {
    width: WIDTH,
    objectFit: 'contain',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
    marginHorizontal: 18,
  },
  price: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 22,
  },
  discount: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  percent: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 18,
  },
  addBtn: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 15,
    borderRadius: 20,
    width: '45%',
  },
  addBtnText: {
    fontWeight: '600',
    color: Colors.primary,
    textAlign: 'center',
  },
  buyBtn: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    width: '45%',
  },
  buyBtnText: {
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  detail: {
    marginTop: 15,
    marginHorizontal: 18,
  },
  label: {
    fontWeight: '400',
    fontSize: 15,
    color: Colors.grey,
    marginVertical: 10,
  },
  detailText: {
    color: '#8891A5',
    fontSize: 18,
  },
});

export default styles;
