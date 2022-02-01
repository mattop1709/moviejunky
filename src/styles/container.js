import { StyleSheet } from "react-native";
import color from "./color";

export default StyleSheet.create({
  triviaFooter: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  questionHeader: {
    height: "5%",
    width: "100%",
    alignItems: "flex-end",
  },
  questionBody: {
    height: "85%",
    justifyContent: "center",
  },
  questionFooter: {
    height: "10%",
    flex: 1,
    alignItems: "center",
    marginHorizontal: 24,
  },
  resultBody: {
    height: "80%",
    justifyContent: "flex-end",
    bottom: 32,
  },
  resultFooter: {
    height: "20%",
    alignItems: "center",
  },
  progressBar: {
    height: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
  },
  questionInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 8,
    flex: 0.3,
  },
  questionSign: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.7,
  },
  questionDetails: {
    flex: 0.6,
    justifyContent: "center",
  },
  timer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  verdictLogo: {
    flex: 0.4,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  verdictResult: {
    flex: 0.2,
    alignItems: "center",
  },
  verdictTitle: {
    flex: 0.1,
    alignItems: "center",
    top: 16,
  },
  verdictSubtitle: {
    flex: 0.3,
    alignItems: "center",
    marginHorizontal: 40,
  },
  pickerDifficulty: {
    width: "32%",
    bottom: 16,
  },
  listDifficulty: {
    backgroundColor: color.primary,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 24,
    height: 48,
  },
  homeTrivia: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    height: 340,
    top: 24,
    alignItems: "center",
  },
  bannerFrame: {
    height: 240,
    width: "90%",
    top: 16,
    backgroundColor: "#dcdcdc",
  },
  topMovies: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "space-between",
  },
  paginationButton: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginVertical: 32,
  },
  movieHighlight: {
    height: 120,
    alignItems: "center",
  },
  movieDetails: {
    width: "80%",
    marginBottom: 32,
  },
  avatar: {
    flex: 1,
    justifyContent: "center",
    left: 24,
  },
});
