import { StyleSheet } from "react-native";

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
});
