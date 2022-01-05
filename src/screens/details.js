import React, { useEffect, useState } from "react";
import * as UI from "react-native";
import { Image } from "react-native-elements";
import { connect } from "react-redux";
import { getStore } from "../redux/config";
import { getMoviesDetails } from "../redux/movie";
import { addMovie } from "../redux/favourites";
import common from "../styles/common";
import Movie from "../utils/movie";

const { Text, View, ActivityIndicator, ScrollView, TouchableOpacity } = UI;

const DetailsScreen = ({
  route: { params },
  movie: { data, isLoading, isError },
  favourites,
  navigation: { navigate },
}) => {
  const [isShow, setShow] = useState(false);
  const { id } = params;
  const MovieObj = new Movie(favourites);
  // console.log(data);

  useEffect(() => {
    getStore().dispatch(getMoviesDetails(id));
    _onFindMovie();
  }, []);

  function _onHandleButton() {
    const { imDbRating, fullTitle, id } = data;
    const params = { imDbRating, fullTitle, id };
    // console.log(params);
    getStore().dispatch(addMovie(params));
    navigate("Favourite");
  }

  function _onFindMovie() {
    /* get the index (if any) for movie inside the favourite basket */
    const index = MovieObj.checkFavourite(id);
    // console.log(index);
    setShow(index === -1 ? true : false);
  }

  const movieDetails = [
    { key: "Banner", image: data.image, type: "image" },
    { key: "Full Title", caption: data.fullTitle, type: "word" },
    { key: "Tagline", caption: data.tagline || "-", type: "word" },
    { key: "Type", caption: data.type, type: "word" },
    { key: "Plot", caption: data.plot || "-", type: "word" },
    { key: "Duration", caption: data.runtimeStr || "-", type: "word" },
    { key: "Awards", caption: data.awards || "-", type: "word" },
    { key: "Directors", caption: data.directors, type: "word" },
    { key: "Stars", caption: data.stars, type: "word" },
    { key: "Genres", caption: data.genres, type: "word" },
    { key: "Companies", caption: data.companies, type: "word" },
    { key: "Rating", caption: data.imDbRating || "-", type: "word" },
  ];

  if (isError)
    return (
      <Text {...{ style: common.basicCenteredText }}>
        Opps, something went wrong, kindly retry
      </Text>
    );
  if (isLoading)
    return <ActivityIndicator {...{ style: { paddingTop: 16 } }} />;
  return (
    <ScrollView>
      {movieDetails.map(({ key, caption, image, type }) => {
        if (type === "image") {
          return (
            <Image
              {...{
                key,
                source: { uri: image },
                containerStyle: common.banner,
              }}
            />
          );
        }

        return (
          <View {...{ key, style: common.basicLayoutPadding }}>
            <Text {...{ style: { paddingBottom: 4, color: "#808080" } }}>
              {key}
            </Text>
            <Text {...{ style: { lineHeight: 18 } }}>{caption}</Text>
          </View>
        );
      })}

      {isShow && (
        <TouchableOpacity
          {...{
            onPress: _onHandleButton,
            style: common.button,
          }}>
          <Text {...{ style: { color: "#fff" } }}>Add To Favourite</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default connect(state => ({
  movie: state.movie,
  favourites: state.favourites,
}))(DetailsScreen);
