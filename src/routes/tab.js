import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home";
import Favourite from "../screens/favourite";

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  return (
    <Navigator
      {...{
        screenOptions: () => ({ headerShown: false }),
      }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Favourite" component={Favourite} />
    </Navigator>
  );
};

export default Tab;
