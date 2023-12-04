import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {WIDTH} from '../../../constants/Dimensions';

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 15,
  },
  banner: {
    backgroundColor: Colors.cardActiveColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    width: WIDTH / 1.5,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  container: {
    padding: 15,
  },
  details: {
    flexDirection: 'column',
    gap: 2,
  },
  firstText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 18,
  },
  secondText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 22,
  },
  thirdText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 15,
  },
  recommended: {
    fontWeight: '400',
    fontSize: 25,
    color: 'black',
    marginTop: 10,
    marginHorizontal: 15,
  },
});

export default styles;
