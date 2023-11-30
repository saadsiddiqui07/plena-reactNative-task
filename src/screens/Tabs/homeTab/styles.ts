import {StyleSheet} from 'react-native';
import {STATUSBAR_HEIGHT} from '../../../constants/Dimensions';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  recommended: {
    fontWeight: '400',
    fontSize: 22,
    color: 'black',
  },
  dataView: {
    padding: 10,
    marginTop: 10,
  },
  products: {
    padding: 15,
  },
});

export default styles;
