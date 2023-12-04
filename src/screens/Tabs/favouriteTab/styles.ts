import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
  },
  title: {
    fontSize: 22,
    color: Colors.grey,
    fontWeight: '600',
  },
  container: {},
  backBtn: {
    backgroundColor: 'lightgray',
    borderRadius: 999,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 25,
    color: '#000000',
  },
  btn: {},
  btnText: {
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default styles;
