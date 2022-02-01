import { StyleSheet } from "react-native";
import color from "./color";

export default StyleSheet.create({
  movie: {
    height: 240,
    width: "41%",
    marginBottom: 4,
    left: 4,
  },
  favourite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    padding: 24,
    backgroundColor: "#fff",
  },
  question: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginHorizontal: 24,
    height: "80%",
    borderRadius: 8,
    justifyContent: "center",
  },
  result: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginHorizontal: 24,
    height: "80%",
    borderRadius: 8,
  },
  bannerDefault: {
    height: 240,
    width: "90%",
    top: 16,
    backgroundColor: color.grey,
  },
  topMovie: {
    width: "47%",
    marginTop: 16,
  },
  movieHighlight: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
