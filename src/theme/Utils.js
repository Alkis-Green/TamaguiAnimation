// import { Dimensions } from "react-native";
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from "react-native-responsive-screen";
// import { RFValue } from "react-native-responsive-fontsize";
// import { isTablet } from "react-native-device-info";

// const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

// // For tablets we set a base of the iphoneX
// export const BASE_HEIGHT = isTablet() ? 896 : screenHeight;
// export const BASE_WIDTH = isTablet() ? 414 : screenWidth;

// const fontScale = (pixel) => {
//   return isTablet()
//     ? RFValue(pixel, BASE_HEIGHT)
//     : RFValue(pixel, screenHeight);
// };

// const pxToHp = (pixel) => {
//   return heightPercentageToDP((pixel / BASE_HEIGHT) * 100);
// };

// const pxToWp = (pixel) => {
//   return widthPercentageToDP((pixel / BASE_WIDTH) * 100);
// };

// export default {
//   hp: heightPercentageToDP,
//   wp: widthPercentageToDP,
//   pxToHp,
//   pxToWp,
//   fontScale,
// };
