import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTriviaQuestions, resetTrivia } from "../redux/trivia";
import { useTimer } from "../hooks/use-timer";
import { toTimeFormat } from "../utils/convertor";

const TOTAL_QUESTIONS = 10;

const TriviaQuestionScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [timer, { initiate, _ }] = useTimer(300);
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
    const char = {
      "&#039;": "'",
      "&quot;": '"',
      "&amp;": "&",
      "&grave;": "`",
      "&ldquo;": '"',
      "&rdquo;": '"',
    };
    return string.replace(
      /&#039;|&quot;|&amp;|&grave;|&ldquo;|&rdquo;/g,
      symbol => char[symbol],
    );
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
    <View {...{ style: { flex: 1, backgroundColor: "#008080" } }}>
      <View style={{ height: "20%" }}>
        <TouchableOpacity
          style={{ paddingRight: 24, paddingTop: 24, alignItems: "flex-end" }}
          onPress={_onCancelTrivia}>
          <Image
            source={require("../../assets/home-white.png")}
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>
        <Text>Welcome Trivia Question</Text>
        <Text>
          Total Questions {questionNumber + 1}/{TOTAL_QUESTIONS}
        </Text>
        <Text>Current Score {_onHandleResult()}</Text>
      </View>

      <View
        {...{
          style: {
            height: "20%",
            justifyContent: "center",
          },
        }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 16,
            marginHorizontal: 24,
            height: "80%",
            borderRadius: 8,
            justifyContent: "center",
          }}>
          <Text style={{ textAlign: "center" }}>
            {_onHandleText(data[questionNumber]?.question) ?? ""}
          </Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 24, height: "40%" }}>
        {data[questionNumber]?.answers.map(answer => (
          <TouchableOpacity
            key={answer}
            style={{
              backgroundColor: "#00B3B3",
              height: 56,
              marginTop: 16,
              padding: 16,
              borderRadius: 8,
              justifyContent: "center",
            }}
            onPress={() => _onSelectAnswer(answer)}>
            <Text key={answer} disabled={disabled}>
              {_onHandleText(answer)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        {...{
          style: {
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 24,
          },
        }}>
        <Text>Remaining Time : {toTimeFormat(timer)}</Text>
        <TouchableOpacity onPress={_onClickNext}>
          <Image
            source={require("../../assets/right-arrow.png")}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TriviaQuestionScreen;
