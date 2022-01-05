import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import common from "../styles/common";
import card from "../styles/card";

const MovieCard = ({ method, ...others }) => {
  return (
    <Card {...{ containerStyle: card.movie }}>
      <Card.Title {...{ style: { height: "20%" } }}>
        {others.title}
        {"\n"}
        {others.description}
      </Card.Title>
      <Card.Image {...{ style: common.image, source: { uri: others.image } }} />
      <Text
        {...{
          style: { textAlign: "center", paddingTop: 16, color: "#008080" },
          onPress: () => method(),
        }}>
        View Details
      </Text>
    </Card>
  );
};

export default MovieCard;
