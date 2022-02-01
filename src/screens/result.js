import React from "react";
import { View } from "react-native";
import Trivia from "../utils/trivia";
import GradientLayout from "../components/gradientLayout";
import TextButton from "../components/textButton";
import ResultCard from "../components/resultCard";
import container from "../styles/container";

const TriviaResultScreen = ({ route, navigation: { navigate } }) => {
  const { score } = route.params;
  const triviaObj = new Trivia([]);
  const ACTUAL_SCORE = score / 10;

  function _onProvideVerdict() {
    return triviaObj.provideVerdict(ACTUAL_SCORE);
  }

  function _onHandleButton() {
    return navigate("Trivia");
  }

  return (
    <GradientLayout>
      <ResultCard
        {...{
          score,
          actualScore: ACTUAL_SCORE,
          icon: _onProvideVerdict().icon,
          title: _onProvideVerdict().title,
          color: _onProvideVerdict().color,
        }}
      />
      <View {...{ style: container.resultFooter }}>
        <TextButton {...{ method: _onHandleButton, caption: "End Trivia" }} />
      </View>
    </GradientLayout>
  );
};

export default TriviaResultScreen;
