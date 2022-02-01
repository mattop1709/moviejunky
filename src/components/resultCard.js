import React from "react";
import { View, Text, Image } from "react-native";
import container from "../styles/container";
import card from "../styles/card";
import icon from "../styles/icon";
import text from "../styles/text";
import color from "../styles/color";

const ResultCard = ({ score, actualScore, ...verdict }) => (
  <View {...{ style: container.resultBody }}>
    <View {...{ style: card.result }}>
      <View {...{ style: container.verdictLogo }}>
        <Image {...{ source: verdict.icon, style: icon.verdictLogo }} />
      </View>

      <View {...{ style: container.verdictResult }}>
        <Text {...{ style: text.verdictSubHeadline }}>{verdict.title}!</Text>
        <Text {...{ style: { ...text.verdictResult, color: verdict.color } }}>
          Score {score}%
        </Text>
      </View>

      <View {...{ style: container.verdictTitle }}>
        <Text {...{ style: text.verdictTitle }}>
          Trivia Completed Successfully!
        </Text>
      </View>

      <View {...{ style: container.verdictSubtitle }}>
        <Text {...{ style: text.verdictSubTitle }}>
          You answered total of{" "}
          <Text {...{ style: { color: color.formal } }}>
            10 film related questions{" "}
          </Text>
          and from that {actualScore} {actualScore <= 1 ? "is" : "are"} correct.
        </Text>
      </View>
    </View>
  </View>
);

export default ResultCard;
