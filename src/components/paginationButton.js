import React from "react";
import { View, Text } from "react-native";
import common from "../styles/common";
import color from "../styles/color";
import container from "../styles/container";

const PaginationButton = ({ methods, isPageState }) => (
  <View {...{ style: common.flexCenter }}>
    <View {...{ style: container.paginationButton }}>
      {["Previous", "Next"].map((item, index) => (
        <Text
          {...{
            key: item,
            disabled: isPageState[index],
            onPress: () => methods[index](),
            style: {
              color: isPageState[index] ? color.grey : color.primary,
            },
          }}>
          {item}
        </Text>
      ))}
    </View>
  </View>
);

export default PaginationButton;
