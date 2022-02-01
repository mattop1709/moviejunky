import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import container from "../styles/container";
import card from "../styles/card";
import color from "../styles/color";
import common from "../styles/common";
import text from "../styles/text";
import button from "../styles/button";

const QuestionCard = ({
  timer,
  questionNumber,
  result,
  difficulty,
  question,
  answers,
  method,
  isDisabled,
  handleText,
}) => (
  <View {...{ style: container.questionBody }}>
    <View {...{ style: card.question }}>
      {/* info */}
      <View style={{ flex: 0.3 }}>
        <View style={{ flex: 4 }}>
          <View {...{ style: container.questionInfo }}>
            <Text {...{ style: { color: color.grey } }}>Score {result}</Text>
            <Text {...{ style: { color: color.grey } }}>{difficulty}</Text>
          </View>
          <View {...{ style: container.questionSign }}>
            <View {...{ style: common.quizQuestion }}>
              <Text>Question {questionNumber + 1}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 6, justifyContent: "center" }}>
          <Text {...{ style: text.quizQuestion }}>{question}</Text>
        </View>
      </View>
      {/* info */}

      <View {...{ style: container.questionDetails }}>
        {answers.map(answer => (
          <TouchableOpacity
            {...{
              key: answer,
              style: button.triviaAnswers,
              onPress: () => method(answer),
            }}>
            <Text {...{ disabled: isDisabled, style: text.verdictSubTitle }}>
              {handleText(answer)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View {...{ style: container.timer }}>
        <Text {...{ style: { color: color.danger } }}>
          Remaining Time : {timer}
        </Text>
      </View>
    </View>
  </View>
);

export default QuestionCard;
