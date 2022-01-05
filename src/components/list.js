import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import card from "../styles/card";

const FavouriteList = ({ caption, onNavigate, onDelete }) => {
  return (
    <View {...{ style: card.favourite }}>
      <View {...{ style: { flex: 0.9 } }}>
        <Text>{caption}</Text>
        <Text
          {...{
            style: { color: "#008080", paddingTop: 4 },
            onPress: onNavigate,
          }}>
          View
        </Text>
      </View>

      <Pressable
        {...{
          style: { flex: 0.1, alignItems: "flex-end" },
          onPress: onDelete,
        }}>
        <Image
          {...{
            source: require("../../assets/delete.png"),
            style: { width: 24, height: 24 },
          }}
        />
      </Pressable>
    </View>
  );
};

export default FavouriteList;
