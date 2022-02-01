import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import container from "../styles/container";
import button from "../styles/button";
import text from "../styles/text";
import color from "../styles/color";
import icon from "../styles/icon";

const TriviaCard = ({ method }) => (
  <View {...{ style: container.homeTrivia }}>
    <TouchableOpacity {...{ onPress: method, style: button.triviaCard }}>
      <View>
        <Text
          {...{
            style: {
              ...text.verdictTitle,
              paddingBottom: 4,
              color: color.secondary,
            },
          }}>
          Trivia Time!
        </Text>
        <Text {...{ style: { color: color.black } }}>
          Play a Movies Pop Quiz
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Image
          {...{
            source: require("../../assets/play.png"),
            style: icon.triviaCard,
          }}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default TriviaCard;
