import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { setTriviaDifficulty } from "../redux/trivia";

const TriviaScreen = ({ navigation: { navigate } }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const difficulties = ["easy", "medium", "hard"];

  function _onInitiateTrivia() {
    dispatch(setTriviaDifficulty(difficulty));
    navigate("Question");
  }

  useEffect(() => {
    if (difficulty !== null) return setDisabled(false);
  }, [difficulty]);

  return (
    <View>
      <Text>Welcome Trivia</Text>
      <Text>Select Difficulty {difficulty ?? "Select One"}</Text>
      {difficulties.map(option => (
        <Button
          key={option}
          title={option}
          onPress={() => setDifficulty(option)}
        />
      ))}
      <Button title="Start" onPress={_onInitiateTrivia} disabled={disabled} />
    </View>
  );
};

export default TriviaScreen;
