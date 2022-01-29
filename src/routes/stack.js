import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tab from "./tab";
// import HomeScreen from "../screens/home";
import HomeScreen from "../screens/home2";
import DetailsScreen from "../screens/details";
import TriviaQuestionScreen from "../screens/question";
import TriviaResultScreen from "../screens/result";

/**
 * @const   screens   place all screens inside this object with <name> : <component name>
 */
const screens = {
  // Movie: Tab,
  Home: HomeScreen,
  Details: DetailsScreen,
  Question: TriviaQuestionScreen,
  Result: TriviaResultScreen,
};

const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
  return (
    <Navigator {...{ screenOptions: { headerShown: false } }}>
      {Object.entries({ ...screens }).map(([name, component]) => (
        <Screen
          {...{
            key: name,
            name,
            component,
          }}
        />
      ))}
    </Navigator>
  );
};

export default Stack;
