import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getTopMovies } from "../redux/movies";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getTopMovies());
  }, []);

  return (
    <ScrollView {...{ style: { flex: 1 } }}>
      <Text>Hello World v2</Text>

      {/* backdrop */}
      <LinearGradient
        colors={["#008080", "#385D6D"]}
        style={{
          position: "absolute",
          height: 200,
          width: "100%",
          backgroundColor: "green",
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
      />
      {/* backdrop */}

      {/* header */}
      <View
        style={{
          height: 320,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View style={{ backgroundColor: "#fff", height: 240, width: "80%" }}>
          <Text>Movie Highlight Card</Text>
        </View>
      </View>
      {/* header */}

      {/* trivia */}
      <View style={{ height: 100, backgroundColor: "red" }}>
        <Text>trivia</Text>
      </View>
      {/* trivia */}

      {/* content */}
      <View>
        {movies?.lists.map(movie => (
          <View key={movie.fullTitle}>
            <Text>{movie.title}</Text>
          </View>
        ))}
      </View>
      {/* content */}
    </ScrollView>
  );
};

export default HomeScreen;
