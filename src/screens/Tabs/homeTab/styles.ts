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

  products: {
    paddingBottom: 100,
  },
  loader: {marginTop: 10, justifyContent: 'center', alignItems: 'center'},
});

export default styles;
