import React from "react";
import { View, Text, Button } from "react-native";

const TriviaScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome Trivia</Text>
      <Button title="Start" onPress={() => navigation.navigate("Question")} />
    </View>
  );
};

export default TriviaScreen;
