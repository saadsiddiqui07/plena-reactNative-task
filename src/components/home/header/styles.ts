import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {HEIGHT} from '../../../constants/Dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 15,
    height: HEIGHT / 3.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '800',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.textInputColor,
    marginTop: 30,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  input: {
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
  },
  headerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'column',
    padding: 5,
  },
  label: {
    color: Colors.labelText,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '600',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  detailsText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
