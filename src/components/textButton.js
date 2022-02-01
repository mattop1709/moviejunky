import React from "react";
import { TouchableOpacity, ActivityIndicator, Text } from "react-native";
import text from "../styles/text";
import button from "../styles/button";
import color from "../styles/color";

const TextButton = ({ isDisabled = false, isLoading = false, ...others }) => (
  <TouchableOpacity
    {...{
      onPress: others.method,
      disabled: isDisabled,
      style: button.textBackground,
    }}>
    {isLoading ? (
      <ActivityIndicator {...{ color: color.white, size: "small" }} />
    ) : (
      <Text {...{ style: text.buttonText }}>{others.caption}</Text>
    )}
  </TouchableOpacity>
);

export default TextButton;
