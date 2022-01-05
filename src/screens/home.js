import React, { useState, useEffect } from "react";
import * as UI from "react-native";
import { connect } from "react-redux";
import { getStore } from "../redux/config";
import { getMoviesByTitle, resetFetchMovies } from "../redux/movies";
import MovieCard from "../components/card";
import common from "../styles/common";
import form from "../styles/form";

const { View, TextInput, ScrollView, ActivityIndicator, Text } = UI;

const HomeScreen = ({ navigation: { navigate }, movies }) => {
  const [keyword, setKeyword] = useState(null);
  const [isRequested, setRequested] = useState(false);

  useEffect(() => {
    return () => {
      getStore().dispatch(resetFetchMovies());
    };
  }, []);

  function _onFetchMovies() {
    if (!keyword) return;
    getStore().dispatch(getMoviesByTitle(keyword));
    setRequested(prev => !prev);
  }

  function _onHandleNullResponse() {
    return movies?.lists.length === 0 && isRequested && !movies?.isLoading;
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
      {_onHandleNullResponse() && (
        <Text {...{ style: { textAlign: "center", paddingTop: 16 } }}>
          Sorry, there is no result that title
        </Text>
      )}
      {movies?.isError && (
        <Text {...{ style: { textAlign: "center", paddingTop: 16 } }}>
          Opps, something went wrong, kindly retry
        </Text>
      )}
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
