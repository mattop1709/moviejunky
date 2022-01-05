import React from "react";
import { Text, Pressable, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

import common from "../styles/common";
import card from "../styles/card";

const MovieCard = ({ method, ...others }) => {
  return (
    <Pressable
      {...{
        onPress: () => method(),
        style: card.movie,
      }}>
      <Image
        {...{
          source: { uri: others.image },
          containerStyle: common.image,
          PlaceholderContent: <ActivityIndicator />,
        }}
      />
      <Text>{others.title}</Text>
      <Text>{others.description}</Text>
    </Pressable>
  );
};

export default MovieCard;
