import React, { useState, useEffect, Fragment } from "react";
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
    /* prevent null keyword from performing request */
    if (!keyword) return;
    getStore().dispatch(getMoviesByTitle(keyword));

    /* assist showing empty results after submit request */
    setRequested(prev => !prev);
  }

  function _onHandleNullResponse() {
    const { lists, isLoading, isError } = movies;
    return lists.length === 0 && isRequested && !isLoading && !isError;
  }

  return (
    <Fragment>
      <TextInput
        {...{
          value: keyword,
          onChangeText: text => setKeyword(text),
          placeholder: "e.g. Venom",
          style: form.searchBar,
          placeholderTextColor: "#808080",
          returnKeyType: "search",
          clearButtonMode: "always",
          onSubmitEditing: _onFetchMovies,
        }}
      />
      {movies?.isLoading && <ActivityIndicator />}
      {_onHandleNullResponse() && (
        <Text {...{ style: common.basicCenteredText }}>
          Sorry, there is no result that title
        </Text>
      )}
      {movies?.isError && (
        <Text {...{ style: common.basicCenteredText }}>
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
    </Fragment>
  );
};

export default connect(state => ({ movies: state.movies }))(HomeScreen);
