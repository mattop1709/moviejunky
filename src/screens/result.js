import React from "react";
import { View, Text, Button } from "react-native";

const TriviaResultScreen = ({
  route: { params },
  navigation: { navigate },
}) => {
  const { score } = params;
  return (
    <View>
      <Text>My Score {score}</Text>
      <Button title="Back to Home" onPress={() => navigate("Trivia")} />
    </View>
  );
};

export default TriviaResultScreen;
