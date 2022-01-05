import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import common from "../styles/common";

import Stack from "../routes/stack";

const Index = () => (
  <SafeAreaView {...{ style: common.basicContainer }}>
    <StatusBar {...{ barStyle: "dark-content" }} />
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
);

export default Index;
