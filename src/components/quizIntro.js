import React from "react";
import { View, Text } from "react-native";
import common from "../styles/common";
import text from "../styles/text";

const QuizIntro = () => (
  <View {...{ style: common.quizIntro }}>
    <Text {...{ style: text.quizIntro }}>
      Hello Challenger, {"\n"}you will need to answer all 10 questions related
      to Movies. Good luck!
    </Text>
  </View>
);

export default QuizIntro;
