import React from "react";
import { Text, View, Image } from "react-native";
import text from "../styles/text";
import color from "../styles/color";
import container from "../styles/container";

const Avatar = ({ image, name, asCharacter }) => (
  <View
    {...{
      key: name,
      style: { flexDirection: "row", marginBottom: 16 },
    }}>
    <Image
      source={{ uri: image }}
      style={{
        height: 80,
        width: 80,
        borderRadius: 150 / 2,
        overflow: "hidden",
      }}
    />
    <View {...{ style: container.avatar }}>
      <Text {...{ style: text.avatar }}>{name}</Text>
      <Text {...{ style: { color: color.black } }}>{asCharacter}</Text>
    </View>
  </View>
);

export default Avatar;
