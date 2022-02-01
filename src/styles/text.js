import { StyleSheet } from "react-native";
import color from "./color";

const TITLE = 16;
const SUB_HEADLINE = 24;
const HEADLINE = 40;

export default StyleSheet.create({
  verdictSubHeadline: {
    color: color.black,
    fontSize: SUB_HEADLINE,
    fontWeight: "bold",
  },
  verdictResult: {
    color: color.black,
    fontSize: HEADLINE,
    fontWeight: "bold",
    top: 4,
  },
  verdictTitle: {
    color: color.black,
    fontSize: TITLE,
    fontWeight: "bold",
  },
  verdictSubTitle: {
    color: color.black,
    textAlign: "center",
    lineHeight: 20,
  },
  buttonText: {
    fontSize: TITLE,
    color: color.white,
  },
  quizIntro: {
    color: color.white,
    textAlign: "center",
    lineHeight: 20,
  },
  quizQuestion: {
    textAlign: "center",
    fontWeight: "bold",
    color: color.black,
    fontSize: TITLE,
  },
});
