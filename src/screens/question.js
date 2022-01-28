import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTriviaQuestions, resetTrivia } from "../redux/trivia";
import { useTimer } from "../hooks/use-timer";
import { toTimeFormat } from "../utils/convertor";

const TOTAL_QUESTIONS = 10;
const QUIZ_TIMER = 100;

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
    dispatch(getTriviaQuestions());
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

  function _onUppercaseLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    setCount(QUIZ_TIMER);
  }

  function _onCancelTrivia() {
    dispatch(resetTrivia());
    navigate("Trivia");
  }

  if (isLoading) return <Text>Loading</Text>;
  return (
    <View {...{ style: { flex: 1, backgroundColor: "#008080" } }}>
      {/* header */}
      <View style={{ height: "5%", width: "100%", alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            paddingRight: 24,
            paddingTop: 24,
          }}
          onPress={_onCancelTrivia}>
          <Image
            source={require("../../assets/home-white.png")}
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>
      </View>
      {/* header */}

      {/* body */}
      <View
        {...{
          style: {
            height: "85%",
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
          {/* info */}
          <View style={{ flex: 0.3 }}>
            <View style={{ flex: 4 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  top: 8,
                  flex: 0.3,
                  backgroundColor: "",
                }}>
                <Text style={{ color: "#7D8182" }}>
                  Score {_onHandleResult()}
                </Text>
                <Text style={{ color: "#7D8182" }}>
                  {_onUppercaseLetter(others.difficulty)}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 0.7,
                }}>
                <View
                  style={{
                    backgroundColor: "#808000",
                    padding: 8,
                    borderRadius: 16,
                  }}>
                  <Text>Question {questionNumber + 1}</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 6, justifyContent: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#4E4B4E",
                  fontSize: 16,
                }}>
                {_onHandleText(data[questionNumber]?.question) ?? ""}
              </Text>
            </View>
          </View>
          {/* info */}

          {/* question */}
          <View style={{ flex: 0.6, justifyContent: "center" }}>
            {data[questionNumber]?.answers.map(answer => (
              <TouchableOpacity
                key={answer}
                style={{
                  borderWidth: 1,
                  borderColor: "#00B3B3",
                  height: 56,
                  marginTop: 16,
                  padding: 16,
                  borderRadius: 24,
                  justifyContent: "center",
                }}
                onPress={() => _onSelectAnswer(answer)}>
                <Text
                  style={{ textAlign: "center", color: "#4E4B4E" }}
                  disabled={disabled}>
                  {_onHandleText(answer)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* question */}

          {/* timer */}
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ color: "#BB6844" }}>
              Remaining Time : {toTimeFormat(timer)}
            </Text>
          </View>

          {/* timer */}
        </View>
      </View>
      {/* body */}

      {/* footer */}
      <View
        {...{
          style: {
            height: "10%",
            flex: 1,
            alignItems: "center",
            marginHorizontal: 24,
          },
        }}>
        <TouchableOpacity onPress={_onClickNext}>
          <Image
            source={require("../../assets/right-arrow.png")}
            style={{ height: 40, width: 40 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 8,
          flexDirection: "row",
          width: "100%",
          backgroundColor: "white",
        }}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], { backgroundColor: "#800080", width })
          }
        />
      </View>
      {/* footer */}
    </View>
  );
};

export default TriviaQuestionScreen;
