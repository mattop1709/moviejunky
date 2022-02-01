import { StyleSheet } from "react-native";
import color from "./color";

const baseStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export default StyleSheet.create({
  basicContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flexCenter: {
    ...baseStyle,
  },
  basicPadding: {
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  basicCenteredText: {
    textAlign: "center",
    paddingTop: 16,
  },
  basicLayoutPadding: {
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  wrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 48,
    paddingHorizontal: 8,
  },
  image: {
    width: "100%",
    height: 120,
  },
  banner: {
    width: "100%",
    height: 600,
    overflow: "hidden",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  button: {
    backgroundColor: "#008080",
    padding: 16,
    margin: 8,
    alignItems: "center",
    borderRadius: 4,
  },
  basicPaddingHeader: {
    paddingLeft: 36,
    paddingTop: 36,
  },
  basicPaddingHeaderRight: {
    paddingRight: 24,
    paddingTop: 24,
  },
  quizIntro: {
    bottom: 80,
    height: 120,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    width: "65%",
    justifyContent: "center",
    padding: 10,
    borderRadius: 16,
  },
  quizQuestion: {
    backgroundColor: color.secondary,
    padding: 8,
    borderRadius: 16,
  },
});
