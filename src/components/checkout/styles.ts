import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  subTotal: {
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 18,
    backgroundColor: '#F8F9FB',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {
    color: Colors.titleGrey,
    fontWeight: '600',
  },
  price: {
    color: Colors.grey,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default styles;
