import React, { useState } from "react";
import * as UI from "react-native";
import { connect } from "react-redux";
import { getStore } from "../redux/config";
import { getMoviesByTitle } from "../redux/movies";
import MovieCard from "../components/card";
import common from "../styles/common";
import form from "../styles/form";

const { View, TextInput, ScrollView, ActivityIndicator } = UI;

const HomeScreen = ({ navigation: { navigate }, movies }) => {
  const [keyword, setKeyword] = useState(null);

  function _onFetchMovies() {
    getStore().dispatch(getMoviesByTitle(keyword));
  }

  return (
    <View>
      <TextInput
        {...{
          value: keyword,
          onChangeText: text => setKeyword(text),
          placeholder: "e.g. Venom",
          style: form.searchBar,
          placeholderTextColor: "#c4c4c4",
          returnKeyType: "search",
          clearButtonMode: "always",
          onSubmitEditing: _onFetchMovies,
        }}
      />
      {movies?.isLoading && <ActivityIndicator />}
      <ScrollView>
        <View {...{ style: common.wrapContainer }}>
          {movies?.lists.map(({ id, ...others }) => (
            <MovieCard
              {...{
                key: id,
                ...others,
                method: () => {
                  navigate("Details", { id });
                  setKeyword(null);
                },
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default connect(state => ({ movies: state.movies }))(HomeScreen);
