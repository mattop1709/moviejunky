import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTriviaQuestions, resetTrivia } from "../redux/trivia";
import { useTimer } from "../hooks/use-timer";
import { toTimeFormat } from "../utils/convertor";

const TOTAL_QUESTIONS = 10;

const TriviaQuestionScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [timer, { initiate, _ }] = useTimer(30);
  const [disabled, setDisabled] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const { data, isLoading } = useSelector(state => state.trivia);

  useEffect(() => {
    dispatch(getTriviaQuestions());
  }, []);

  useEffect(() => {
    if (timer === 0) return _onClickNext();
  }, [timer]);

  function _onHandleText(string) {
    if (!string) return;
    const char = { "&#039;": "'", "&quot;": '"' };
    return string.replace(/&#039;|&quot;/g, symbol => char[symbol]);
  }

  function _onHandleResult() {
    return `${correctAnswer * 10}%`;
  }

  function _onSelectAnswer(answer) {
    setDisabled(true);
    const correctAnswer = data[questionNumber]?.correct_answer === answer;
    correctAnswer && setCorrectAnswer(score => score + 1);
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
  }

  function _onCancelTrivia() {
    dispatch(resetTrivia());
    navigate("Trivia");
  }

  if (isLoading) return <Text>Loading</Text>;
  return (
    <View>
      <Text>Welcome Trivia Question</Text>
      <Text>
        Total Questions {questionNumber + 1}/{TOTAL_QUESTIONS}
      </Text>
      <Text>Current Score {_onHandleResult()}</Text>
      <Text>{_onHandleText(data[questionNumber]?.question) ?? ""}</Text>
      <Text>Remaining Time : {toTimeFormat(timer)}</Text>
      {data[questionNumber]?.answers.map(answer => (
        <Text
          key={answer}
          onPress={() => _onSelectAnswer(answer)}
          disabled={disabled}>
          {_onHandleText(answer)}
        </Text>
      ))}
      <Button title="Next" onPress={_onClickNext} />
      <Button title="Back to Home" onPress={_onCancelTrivia} />
    </View>
  );
};

export default TriviaQuestionScreen;
