import { StyleSheet } from "react-native";

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
  wrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  image: {
    width: "95%",
    height: 120,
  },
  banner: {
    width: "100%",
    height: 240,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#ee7202",
    padding: 16,
    margin: 8,
    alignItems: "center",
    borderRadius: 4,
  },
});
