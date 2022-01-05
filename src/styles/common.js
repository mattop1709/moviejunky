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
  basicPadding: {
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  wrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 80,
    paddingHorizontal: 8,
  },
  image: {
    width: "100%",
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
