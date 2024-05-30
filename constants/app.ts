import {Platform} from 'react-native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const {height: h, width: w} = Dimensions.get('screen');

const ratio = (width / 414 / height) * 1000;

const widthRatio = width / 500;
const heightRatio = height / 500;

export const dimensions = {
  height,
  width,
  ratio,
  widthRatio,
  heightRatio,
  heightScreen: h,
  widthScreen: w,
};

// Sử dụng với các ứng dụng có sự xoay màn hình
const shorter = Math.min(dimensions.width, dimensions.height);
const longer = Math.max(dimensions.width, dimensions.height);
const shorterScreen = Math.min(dimensions.widthScreen, dimensions.heightScreen);
const longerScreen = Math.max(dimensions.widthScreen, dimensions.heightScreen);

export const edgeScreen = {
  shorter,
  longer,
  shorterScreen,
  longerScreen,
};

export const DEVICE = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isSmallDevice: dimensions.widthScreen < 375,
};
