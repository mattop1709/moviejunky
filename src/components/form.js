import React from "react";
import { TextInput } from "react-native";
import form from "../styles/form";

const SearchBar = ({ value, ...methods }) => (
  <TextInput
    {...{
      value,
      onChangeText: methods.onChangeText,
      placeholder: "e.g. Venom",
      style: form.searchBar,
      placeholderTextColor: "#c4c4c4",
      returnKeyType: "search",
      clearButtonMode: "always",
      onSubmitEditing: methods[1],
    }}
  />
);

export default SearchBar;
