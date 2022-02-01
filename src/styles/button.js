import { StyleSheet } from "react-native";
import color from "./color";

export default StyleSheet.create({
  textBackground: {
    backgroundColor: color.secondary,
    width: "50%",
    padding: 16,
    alignItems: "center",
    borderRadius: 24,
  },
  triviaShadow: {
    position: "absolute",
    backgroundColor: "rgba(52, 52, 52, 0.9)",
    padding: 32,
    borderRadius: 150 / 2,
    marginLeft: 16,
    marginTop: 16,
  },
  triviaDifficulty: {
    backgroundColor: color.lightPrimary,
    borderColor: color.lightPrimary,
    borderRadius: 24,
  },
  triviaAnswers: {
    borderWidth: 1,
    borderColor: color.lightPrimary,
    height: 56,
    marginTop: 16,
    padding: 16,
    borderRadius: 24,
    justifyContent: "center",
  },
});
