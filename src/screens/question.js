import React, { useState, useEffect, useRef } from "react";
import * as UI from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTriviaQuestions, resetTrivia } from "../redux/trivia";
import { useTimer } from "../hooks/use-timer";
import { toTimeFormat } from "../utils/convertor";
import Trivia from "../utils/trivia";
import icon from "../styles/icon";
import common from "../styles/common";
import color from "../styles/color";

import GradientLayout from "../components/gradientLayout";
import QuestionCard from "../components/questionCard";
import container from "../styles/container";

const { View, TouchableOpacity, Image, StyleSheet, Animated } = UI;
const [TOTAL_QUESTIONS, QUIZ_TIMER] = [10, 100];

const TriviaQuestionScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [timer, { initiate, reset }] = useTimer(QUIZ_TIMER);
  const [disabled, setDisabled] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const { data, isLoading, ...others } = useSelector(state => state.trivia);

  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(timer);
  const triviaObj = new Trivia([]);

  const load = count => {
    Animated.timing(counter, {
      toValue: count,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const width = counter.interpolate({
    inputRange: [0, QUIZ_TIMER],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  useEffect(() => {
    if (data.length === 0) dispatch(getTriviaQuestions());
    countInterval.current = setInterval(() => setCount(old => old - 1), 1000);
    return () => {
      clearInterval(countInterval);
      reset();
      setCount(0);
    };
  }, []);

  useEffect(() => {
    load(count);
    if (count >= QUIZ_TIMER) {
      setCount(QUIZ_TIMER);
      clearInterval(countInterval);
    }
  }, [count]);

  useEffect(() => {
    if (timer === 0) {
      return _onClickNext();
    }
  }, [timer]);

  function _onHandleText(string) {
    return triviaObj.handleSymbol(string);
  }

  function _onUppercaseLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function _onHandleResult() {
    return `${correctAnswer * 10}%`;
  }

  function _onSelectAnswer(answer) {
    setDisabled(true);
    const correct_Answer = data[questionNumber]?.correct_answer === answer;
    correct_Answer && setCorrectAnswer(score => score + 1);
    _onClickNext();
  }

  function _onClickNext() {
    const isFinished = questionNumber === TOTAL_QUESTIONS - 1;
    isFinished
      ? navigate("Result", { score: correctAnswer * 10 })
      : _onProgressTrivia();
  }

  function _onProgressTrivia() {
    setQuestionNumber(number => number + 1);
    setDisabled(false);
    initiate();
    setCount(QUIZ_TIMER);
  }

  function _onCancelTrivia() {
    dispatch(resetTrivia());
    navigate("Trivia");
  }

  return (
    <GradientLayout>
      <View {...{ style: container.questionHeader }}>
        <TouchableOpacity
          {...{
            style: common.basicPaddingHeaderRight,
            onPress: _onCancelTrivia,
          }}>
          <Image
            {...{
              style: icon.questionHeader,
              source: require("../../assets/home-white.png"),
            }}
          />
        </TouchableOpacity>
      </View>

      <QuestionCard
        {...{
          timer: toTimeFormat(timer),
          questionNumber,
          result: _onHandleResult(),
          difficulty: _onUppercaseLetter(others.difficulty),
          question: _onHandleText(data[questionNumber]?.question) ?? "",
          answers: data[questionNumber]?.answers,
          method: _onSelectAnswer,
          handleText: _onHandleText,
          isDisabled: disabled,
        }}
      />

      <View {...{ style: container.questionFooter }}>
        <TouchableOpacity onPress={_onClickNext}>
          <Image
            {...{
              style: icon.questionNext,
              source: require("../../assets/right-arrow.png"),
            }}
          />
        </TouchableOpacity>
      </View>
      <View {...{ style: container.progressBar }}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill],
            { backgroundColor: color.tertiary, width })
          }
        />
      </View>
    </GradientLayout>
  );
};

export default TriviaQuestionScreen;
