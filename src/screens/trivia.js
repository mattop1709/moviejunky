import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import { setTriviaDifficulty } from "../redux/trivia";

const TriviaScreen = ({ navigation: { navigate } }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [isDisabled, setDisabled] = useState(true);
  const [isShown, setShown] = useState(false);
  const dispatch = useDispatch();
  const difficulties = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  function _onInitiateTrivia() {
    dispatch(setTriviaDifficulty(difficulty));
    navigate("Question");
    setTimeout(() => {
      setDifficulty(null);
      setDisabled(true);
    }, 100);
  }

  useEffect(() => {
    if (difficulty !== null) return setDisabled(false);
  }, [difficulty]);

  return (
    <ImageBackground
      {...{
        source: require("../../assets/trivia.png"),
        style: { height: "100%", width: "100%" },
      }}>
      <View style={{ flex: 1 }}>
        <View
          {...{
            style: {
              position: "absolute",
              bottom: 40,
              width: "100%",
              alignItems: "center",
            },
          }}>
          <DropDownPicker
            {...{
              open: isShown,
              value: difficulty,
              setOpen: setShown,
              items: difficulties,
              placeholder: "Pick Level",
              listMode: "MODAL",
              setValue: setDifficulty,
              style: {
                backgroundColor: "#00B3B3",
                borderColor: "#00B3B3",
                borderRadius: 24,
              },
              placeholderStyle: {
                color: "#fff",
              },
              containerStyle: {
                width: "32%",
                bottom: 16,
              },
              listItemContainerStyle: {
                backgroundColor: "#008080",
                marginTop: 16,
                marginHorizontal: 16,
                borderRadius: 24,
                height: 48,
              },
              listItemLabelStyle: {
                color: "#fff",
              },
              modalProps: { animationType: "fade" },
              modalTitle: "Select Trivia Difficulty",
              customItemLabelStyle: {
                fontStyle: "italic",
              },
            }}
          />

          <TouchableOpacity
            onPress={_onInitiateTrivia}
            disabled={isDisabled}
            style={{
              backgroundColor: "#808000",
              width: "50%",
              padding: 16,
              alignItems: "center",
              borderRadius: 24,
            }}>
            <Text style={{ color: "#fff" }}>Start Trivia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TriviaScreen;

// TO BE DELETED

{
  /* {difficulties.map(option => (
        <Button
          key={option}
          title={option}
          onPress={() => setDifficulty(option)}
        />
      ))} */
}
{
  /* <Button title="Start" onPress={_onInitiateTrivia} disabled={disabled} /> */
}
