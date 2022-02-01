import React, { useEffect, Fragment } from "react";
import * as UI from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDetails } from "../redux/movie";
import Avatar from "../components/avatar";
import common from "../styles/common";
import color from "../styles/color";
import container from "../styles/container";
import text from "../styles/text";
import card from "../styles/card";
import button from "../styles/button";
import icon from "../styles/icon";
import image from "../styles/image";

const { Text, View, ScrollView, TouchableOpacity, Image, RefreshControl } = UI;
const controller = new AbortController();

const DetailsScreen = ({ route: { params }, navigation: { navigate } }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(state => state.movie);
  // console.log(data);

  useEffect(() => {
    dispatch(getMoviesDetails(id));

    return () => {
      controller.abort();
    };
  }, []);

  const movie_information = {
    header: { key: "Banner", image: data.image },
    hightlight: [
      { key: "Rating", caption: data.imDbRating || "N/A" },
      { key: "Reviews", caption: data.imDbRatingVotes || "N/A" },
      { key: "Content Rating", caption: data.contentRating || "N/A" },
    ],
    body: { key: "Storyline", caption: data.plot || "N/A" },
    footer: { key: "Actor List", caption: data.actorList || [] },
  };

  if (isError) {
    return (
      <Text {...{ style: common.basicCenteredText }}>
        Opps, something went wrong, kindly retry
      </Text>
    );
  }

  if (isLoading) {
    return (
      <UI.ActivityIndicator
        color={color.primary}
        size="large"
        style={common.flexCenter}
      />
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          {...{
            refreshing: isLoading,
            onRefresh: () => dispatch(getMoviesDetails(id)),
            size: "default",
            tintColor: color.primary,
          }}
        />
      }
      {...{ style: { backgroundColor: color.white } }}>
      {!isLoading && (
        <Fragment>
          {/* header */}
          <Image
            {...{
              source: { uri: movie_information.header.image },
              style: common.banner,
            }}
          />
          <TouchableOpacity
            style={button.movieHighlight}
            onPress={() => navigate("Home")}>
            <Image
              source={require("../../assets/left-arrow.png")}
              style={icon.triviaBack}
            />
          </TouchableOpacity>
          {/* header */}

          {/* highlight */}
          <View {...{ style: container.movieHighlight }}>
            <View {...{ style: { flexDirection: "row", height: "100%" } }}>
              {movie_information.hightlight.map(({ key, caption }) => (
                <View {...{ key, style: card.movieHighlight }}>
                  <Text {...{ style: text.movieHighlight }}>{key}</Text>
                  <Text {...{ style: text.movieHighlightDetails }}>
                    {caption}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {/* highlight */}

          {/* body */}
          <View {...{ style: { alignItems: "center" } }}>
            <View {...{ style: container.movieDetails }}>
              <Text {...{ style: text.movieHighlightTitle }}>
                {movie_information.body.key}
              </Text>
              <Text
                {...{ style: { ...text.verdictSubTitle, textAlign: "left" } }}>
                {movie_information.body.caption}
              </Text>
            </View>
          </View>
          {/* body */}

          {/* footer */}
          <View {...{ style: { alignItems: "center" } }}>
            <View {...{ style: container.movieDetails }}>
              <Text {...{ style: text.movieHighlightTitle }}>
                {movie_information.footer.key}
              </Text>

              <View style={{ width: "100%" }}>
                {movie_information.footer.caption.map(
                  ({ name, image, asCharacter }) => (
                    <Avatar {...{ key: name, name, image, asCharacter }} />
                  ),
                )}
              </View>
            </View>
          </View>
          {/* footer */}
        </Fragment>
      )}
    </ScrollView>
  );
};

export default DetailsScreen;
