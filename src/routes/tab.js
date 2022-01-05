import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home";
import Favourite from "../screens/favourite";

const { Navigator, Screen } = createBottomTabNavigator();

/**
 * @const   screens   place all screens inside this object with <name> : <component name>
 */
const screens = {
  Home: HomeScreen,
  Favourite,
};

const Tab = () => {
  return (
    <Navigator
      {...{
        backBehavior: "none",
        screenOptions: ({ route }) => ({
          headerShown: false,
          tabBarIcon: () => {
            function getIcon(args) {
              const icon = {
                Home: require("../../assets/home.png"),
                Favourite: require("../../assets/heart.png"),
              };
              return icon[args];
            }

            return (
              <Image
                {...{
                  source: getIcon(route.name),
                  style: { height: 24, width: 24 },
                }}
              />
            );
          },
        }),
      }}>
      {Object.entries({ ...screens }).map(([name, component]) => (
        <Screen {...{ key: name, name, component }} />
      ))}
    </Navigator>
  );
};

export default Tab;
