import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import button from "../styles/button";
import color from "../styles/color";
import container from "../styles/container";
import text from "../styles/text";

const DifficultyPicker = ({ method, ...hooks }) => {
  const difficulties = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];
  return (
    <DropDownPicker
      {...{
        open: hooks.isShown,
        setOpen: hooks.setShown,
        value: hooks.difficulty,
        setValue: hooks.setDifficulty,
        onSelectItem: method,
        items: difficulties,
        placeholder: "Pick Level",
        listMode: "MODAL",
        style: button.triviaDifficulty,
        placeholderStyle: { color: color.white },
        containerStyle: container.pickerDifficulty,
        listItemContainerStyle: container.listDifficulty,
        listItemLabelStyle: text.quizIntro,
        modalProps: { animationType: "fade" },
        modalTitle: "Select Trivia Difficulty",
      }}
    />
  );
};

export default DifficultyPicker;
