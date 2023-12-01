import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const {height} = Dimensions.get('window');

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
  },
  details: {
    padding: 18,
  },
  category: {
    color: Colors.grey,
  },
  title: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  images: {
    height: height / 4,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
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
  },
  addBtn: {
    borderWidth: 1,
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
