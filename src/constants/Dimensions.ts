import {Dimensions, StatusBar} from 'react-native';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('window');

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export {HEIGHT, WIDTH, STATUSBAR_HEIGHT};
