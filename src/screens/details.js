import React, { useEffect, Fragment } from "react";
import * as UI from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDetails } from "../redux/movie";
import common from "../styles/common";

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
    body: { key: "Storyline", caption: data.plot || "-" },
    footer: { key: "Actor List", caption: data.actorList || [] },
  };

  if (isError) {
    return (
      <Text {...{ style: common.basicCenteredText }}>
        Opps, something went wrong, kindly retry
      </Text>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          {...{
            refreshing: isLoading,
            onRefresh: () => dispatch(getMoviesDetails(id)),
            size: "small",
            tintColor: "#008080",
          }}
        />
      }
      {...{ style: { backgroundColor: "#fff" } }}>
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
            style={{
              position: "absolute",
              backgroundColor: "rgba(52, 52, 52, 0.6)",
              padding: 16,
              borderRadius: 150 / 2,
              left: 16,
              top: 16,
            }}
            onPress={() => navigate("Home")}>
            <Image
              source={require("../../assets/left-arrow.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          {/* header */}

          {/* highlight */}
          <View {...{ style: { height: 120, alignItems: "center" } }}>
            <View {...{ style: { flexDirection: "row", height: "100%" } }}>
              {movie_information.hightlight.map(({ key, caption }) => (
                <View
                  {...{
                    key,
                    style: {
                      width: "30%",
                      // backgroundColor: "green",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  }}>
                  <Text
                    {...{
                      style: {
                        fontSize: 12,
                        paddingBottom: 4,
                        color: "#808000",
                      },
                    }}>
                    {key}
                  </Text>
                  <Text style={{ fontSize: 24, color: "#4E4B4E" }}>
                    {caption}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {/* highlight */}

          {/* body */}
          <View {...{ style: { alignItems: "center" } }}>
            <View {...{ style: { width: "80%", marginBottom: 32 } }}>
              <Text
                {...{
                  style: {
                    fontSize: 16,
                    paddingBottom: 16,
                    color: "#808000",
                    fontWeight: "bold",
                  },
                }}>
                {movie_information.body.key}
              </Text>
              <Text {...{ style: { lineHeight: 20, color: "#4E4B4E" } }}>
                {movie_information.body.caption}
              </Text>
            </View>
          </View>
          {/* body */}

          {/* footer */}
          <View {...{ style: { alignItems: "center" } }}>
            <View {...{ style: { width: "80%", marginBottom: 32 } }}>
              <Text
                {...{
                  style: {
                    fontSize: 16,
                    paddingBottom: 16,
                    color: "#808000",
                    fontWeight: "bold",
                  },
                }}>
                {movie_information.footer.key}
              </Text>

              <View style={{ width: "100%" }}>
                {movie_information.footer.caption.map(
                  ({ name, image, asCharacter }) => (
                    <View
                      {...{
                        key: name,
                        style: { flexDirection: "row", marginBottom: 16 },
                      }}>
                      <Image
                        source={{ uri: image }}
                        style={{
                          height: 80,
                          width: 80,
                          borderRadius: 150 / 2,
                          overflow: "hidden",
                        }}
                      />
                      <View
                        {...{
                          style: {
                            flex: 1,
                            justifyContent: "center",
                            left: 24,
                          },
                        }}>
                        <Text
                          {...{
                            style: {
                              color: "#008080",
                              fontWeight: "bold",
                              paddingBottom: 2,
                            },
                          }}>
                          {name}
                        </Text>
                        <Text {...{ style: { color: "#4E4B4E" } }}>
                          {asCharacter}
                        </Text>
                      </View>
                    </View>
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
