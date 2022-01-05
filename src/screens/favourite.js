import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { removeMovie } from "../redux/favourites";
import { getStore } from "../redux/config";

const Favourite = ({ favourites }) => {
  return (
    <View>
      {favourites.map(({ image, fullTitle }, index) => (
        <View
          {...{
            key: fullTitle,
            style: { flexDirection: "row", justifyContent: "space-between" },
          }}>
          <Text {...{ key: index }}>{fullTitle}</Text>
          <Text onPress={() => getStore().dispatch(removeMovie(fullTitle))}>
            Remove
          </Text>
        </View>
      ))}
    </View>
  );
};

export default connect(state => ({ favourites: state.favourites }))(Favourite);
