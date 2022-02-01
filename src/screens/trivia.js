import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTriviaDifficulty, getTriviaQuestions } from "../redux/trivia";
import ImageLayout from "../components/imageLayout";
import QuizIntro from "../components/quizIntro";
import TextButton from "../components/textButton";
import DifficultyPicker from "../components/difficultyPicker";
import container from "../styles/container";
import icon from "../styles/icon";
import button from "../styles/button";
import common from "../styles/common";

const TriviaScreen = ({ navigation: { navigate } }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [isDisabled, setDisabled] = useState(true);
  const [isShown, setShown] = useState(false);
  const { isLoading } = useSelector(state => state.trivia);
  const dispatch = useDispatch();

  async function _onInitiateTrivia() {
    await dispatch(getTriviaQuestions());
    navigate("Question");
    setTimeout(() => {
      setDifficulty(null);
      setDisabled(true);
    }, 100);
  }

  useEffect(() => {
    if (difficulty !== null) {
      return setDisabled(false);
    }
  }, [difficulty]);

  return (
    <ImageLayout>
      <TouchableOpacity
        {...{
          style: common.basicPaddingHeader,
          onPress: () => navigate("Home"),
        }}>
        <View {...{ style: button.triviaShadow }} />
        <Image
          {...{
            style: icon.triviaBack,
            source: require("../../assets/left-arrow.png"),
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <View {...{ style: container.triviaFooter }}>
          <QuizIntro />
          <DifficultyPicker
            {...{
              isShown,
              setShown,
              difficulty,
              setDifficulty,
              method: ({ value }) => dispatch(setTriviaDifficulty(value)),
            }}
          />
          <TextButton
            {...{
              isDisabled,
              isLoading,
              method: _onInitiateTrivia,
              caption: "Start Trivia",
            }}
          />
        </View>
      </View>
    </ImageLayout>
  );
};

export default TriviaScreen;
