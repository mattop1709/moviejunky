import React from "react";
import { Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import { removeMovie } from "../redux/favourites";
import { getStore } from "../redux/config";
import common from "../styles/common";
import FavouriteList from "../components/list";

const Favourite = ({ favourites, navigation: { navigate } }) => {
  if (favourites.length === 0)
    return (
      <Text {...{ style: common.basicCenteredText }}>
        There is no favourite movie
      </Text>
    );
  return (
    <ScrollView
      {...{ style: { ...common.basicLayoutPadding, paddingBottom: 48 } }}>
      {favourites.map(({ fullTitle, id, imDbRating }) => (
        <FavouriteList
          {...{
            key: id,
            caption: `${fullTitle} | ${imDbRating || "-"}`,
            onNavigate: () => navigate("Details", { id }),
            onDelete: () => getStore().dispatch(removeMovie(fullTitle)),
          }}
        />
      ))}
    </ScrollView>
  );
};

export default connect(state => ({ favourites: state.favourites }))(Favourite);
