import React from "react";
import { Text, View, ScrollView, Image, Pressable } from "react-native";
import { connect } from "react-redux";
import { removeMovie } from "../redux/favourites";
import { getStore } from "../redux/config";

const Favourite = ({ favourites, navigation: { navigate } }) => {
  if (favourites.length === 0)
    return (
      <Text {...{ style: { textAlign: "center", paddingTop: 16 } }}>
        There is no favourite movie
      </Text>
    );
  return (
    <ScrollView {...{ style: { paddingBottom: 48, paddingHorizontal: 24 } }}>
      {favourites.map(({ fullTitle, id, imDbRating }, index) => (
        <View
          {...{
            key: fullTitle,
            style: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
              padding: 24,
              backgroundColor: "#fff",
            },
          }}>
          <View {...{ style: { flex: 0.9 } }}>
            <Text {...{ key: index }}>
              {fullTitle} | {imDbRating}
            </Text>
            <Text
              {...{
                style: { color: "#ee7202", paddingTop: 4 },
                onPress: () => navigate("Details", { id }),
              }}>
              View
            </Text>
          </View>

          <Pressable
            {...{
              style: { flex: 0.1, alignItems: "flex-end" },
              onPress: () => getStore().dispatch(removeMovie(fullTitle)),
            }}>
            <Image
              {...{
                source: require("../../assets/delete.png"),
                style: { width: 24, height: 24 },
              }}
            />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default connect(state => ({ favourites: state.favourites }))(Favourite);

{
  /* 
  <View
          {...{
            key: fullTitle,
            style: {
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
            },
          }}>
          <View>
            <Text {...{ key: index }}>{fullTitle}</Text>
            <Text {...{ onPress: () => navigate("Details", { id }) }}>
              View
            </Text>
          </View>

          <Text onPress={() => getStore().dispatch(removeMovie(fullTitle))}>
            Remove
          </Text>
        </View> 
        */
}
