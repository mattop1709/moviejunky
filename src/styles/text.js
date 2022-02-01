import { StyleSheet } from "react-native";
import color from "./color";

const FOOTNOTE = 12;
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
  bannerTitle: {
    color: color.white,
    fontSize: TITLE,
    fontWeight: "bold",
  },
  bannerHeader: {
    color: color.lightPrimary,
    fontWeight: "bold",
  },
  pagination: {
    fontSize: FOOTNOTE,
    top: 2,
    color: color.primary,
  },
  movieHighlight: {
    fontSize: 12,
    paddingBottom: 4,
    color: color.secondary,
  },
  movieHighlightDetails: {
    fontSize: SUB_HEADLINE,
    color: color.black,
  },
  movieHighlightTitle: {
    fontSize: TITLE,
    paddingBottom: 16,
    color: color.secondary,
    fontWeight: "bold",
  },
  avatar: {
    color: color.primary,
    fontWeight: "bold",
    paddingBottom: 2,
  },
});
