import Colors from "./colors";
import Fonts from "./Fonts";
import Utils from "./Utils";
import resetStyles from "./resets";

export default {
  buttonHeight: 48,
  inputHeight: 55,
  roundness: 5,
  inputRoundness: 16,
  color: {
    ...Colors,
  },
  font: {
    ...Fonts,
  },
  util: {
    ...Utils,
    resetStyles,
  },
};
