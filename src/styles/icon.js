import { StyleSheet } from "react-native";

const SMALL = { height: 24, width: 24 };
const MEDIUM = { height: 40, width: 40 };
const EXTRA_LARGE = { height: 120, width: 120 };

export default StyleSheet.create({
  questionHeader: {
    ...SMALL,
  },
  questionNext: {
    ...MEDIUM,
  },
  triviaBack: {
    ...SMALL,
  },
  verdictLogo: {
    ...EXTRA_LARGE,
    bottom: 16,
  },
});
