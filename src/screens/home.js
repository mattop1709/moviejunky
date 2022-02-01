import React, { useEffect, useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getTopMovies } from "../redux/movies";
import { usePagination } from "../hooks/use-pagination";
import Banner from "../components/banner";
import TriviaCard from "../components/triviaCard";
import TopMovieCard from "../components/topMovieCard";
import PaginationButton from "../components/paginationButton";
import color from "../styles/color";
import common from "../styles/common";

const HomeScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [isRefresh, setRefresh] = useState(false);
  const { lists, isLoading } = useSelector(state => state.movies);
  const { isPageState, actions, ...others } = usePagination(lists);

  useEffect(() => {
    dispatch(getTopMovies());
  }, []);

  useEffect(() => {
    others.setItemList(lists);
  }, [lists]);

  function _onRetryFetch() {
    setRefresh(true);
    dispatch(getTopMovies()).then(() => setRefresh(false));
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          {...{
            refreshing: isRefresh,
            onRefresh: _onRetryFetch,
            size: "default",
            tintColor: color.tertiary,
          }}
        />
      }
      {...{ style: { flex: 1, backgroundColor: color.white } }}>
      <LinearGradient
        colors={[color.darkPrimary, color.primary]}
        style={common.backdrop}
      />
      <Banner
        {...{ uri: lists[3]?.image, fullTitle: lists[3]?.fullTitle, isLoading }}
      />
      <TriviaCard {...{ method: () => navigate("Trivia") }} />
      <TopMovieCard
        {...{
          isLoading,
          pageItems: others?.pageItems,
          currentPage: others?.currentPage,
          totalPages: others?.totalPages,
          navigate,
        }}
      />

      {others.isPaginating && (
        <PaginationButton {...{ isPageState, methods: actions }} />
      )}
    </ScrollView>
  );
};

export default HomeScreen;
