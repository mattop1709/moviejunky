import React from "react";
import { ImageBackground } from "react-native";
import common from "../styles/common";

const ImageLayout = ({ children }) => (
  <ImageBackground
    {...{
      source: require("../../assets/trivia.png"),
      style: { ...common.image, height: "100%" },
    }}>
    {children}
  </ImageBackground>
);

export default ImageLayout;
