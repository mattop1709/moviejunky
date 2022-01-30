import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
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
    if (difficulty !== null) {
      return setDisabled(false);
    }
  }, [difficulty]);

  return (
    <ImageBackground
      {...{
        source: require("../../assets/trivia.png"),
        style: { height: "100%", width: "100%" },
      }}>
      <TouchableOpacity
        style={{ paddingLeft: 24, paddingTop: 24 }}
        onPress={() => navigate("Home")}>
        <Image
          source={require("../../assets/left-arrow.png")}
          style={{ height: 24, width: 24 }}
        />
      </TouchableOpacity>
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
          <View
            style={{
              bottom: 80,
              height: 120,
              backgroundColor: "rgba(52, 52, 52, 0.6)",
              width: "65%",
              justifyContent: "center",
              padding: 10,
              borderRadius: 16,
            }}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                lineHeight: 20,
              }}>
              Hello Challenger, {"\n"}you will need to answer all 10 questions
              related to Movies. Good luck!
            </Text>
          </View>
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
                textAlign: "center",
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
