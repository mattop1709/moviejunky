import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tab from "./tab";
import DetailsScreen from "../screens/details";
import TriviaQuestionScreen from "../screens/question";

/**
 * @const   screens   place all screens inside this object with <name> : <component name>
 */
const screens = {
  Movie: Tab,
  Details: DetailsScreen,
  Question: TriviaQuestionScreen,
};

const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
  return (
    <Navigator>
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
