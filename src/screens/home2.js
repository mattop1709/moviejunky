import React, { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getTopMovies } from "../redux/movies";
import { usePagination } from "../hooks/use-pagination";

const HomeScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { lists, isLoading } = useSelector(state => state.movies);
  const { isPageState, actions, ...others } = usePagination(lists, 8);

  useEffect(() => {
    dispatch(getTopMovies());
  }, []);

  useEffect(() => {
    others.setItemList(lists);
  }, [lists]);

  return (
    <ScrollView {...{ style: { flex: 1, backgroundColor: "#fff" } }}>
      {/* backdrop */}
      <LinearGradient
        colors={["#008080", "#385D6D"]}
        style={{
          position: "absolute",
          height: 210,
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
          height: 340,
          top: 24,
          alignItems: "center",
        }}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ height: 32, width: 56 }}
        />
        <View
          style={{
            height: 240,
            width: "90%",
            top: 24,
            backgroundColor: "#dcdcdc",
          }}>
          {isLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <ActivityIndicator color="#000" />
            </View>
          ) : (
            <>
              <Image
                source={{ uri: lists[3]?.image }}
                style={{
                  resizeMode: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <LinearGradient
                locations={[0, 1.0]}
                colors={["rgba(0,0,0,0.00)", "rgba(0,0,0,0.90)"]}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              />
              <View style={{ position: "absolute", bottom: 8, left: 8 }}>
                <Text style={{ color: "yellow", fontWeight: "bold" }}>
                  Editor's Choice
                </Text>
                <Text
                  style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                  {lists[3]?.fullTitle}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
      {/* header */}

      {/* trivia */}
      <View style={{ height: 100 }}>
        <View
          style={{
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TouchableOpacity
            onPress={() => navigate("Trivia")}
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#800080",
              padding: 16,
              borderRadius: 8,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  paddingBottom: 4,
                  color: "#808000",
                }}>
                Trivia Time!
              </Text>
              <Text style={{ color: "#4E4B4E" }}>Play a Movies Pop Quiz</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Image
                source={require("../../assets/play.png")}
                style={{ height: 32, width: 32 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* trivia */}

      {/* seperator */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
          paddingTop: 16,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingBottom: 8,
            color: "#808000",
          }}>
          Top 250 Movies
        </Text>
        {others.pageItems.length !== 0 && (
          <Text
            style={{
              fontSize: 10,
              top: 2,
              color: "#008080",
            }}>{`Page ${others.currentPage} of ${others.totalPages}`}</Text>
        )}
      </View>
      {/* seperator */}

      {/* content */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "90%",
            justifyContent: "space-between",
          }}>
          {isLoading && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 24,
              }}>
              <ActivityIndicator color="#000" />
            </View>
          )}
          {others?.pageItems.map(({ fullTitle, image, rank, id }) => (
            <TouchableOpacity
              onPress={() => {
                navigate("Details", { id });
              }}
              key={fullTitle}
              style={{
                width: "47%",
                marginTop: 16,
              }}>
              <Image
                source={{ uri: image }}
                style={{
                  width: "100%",
                  height: 240,
                  overflow: "hidden",
                  borderRadius: 8,
                }}
              />
              <View style={{ height: 50, justifyContent: "center" }}>
                <Text
                  numberOfLines={2}
                  style={{ textAlign: "center", color: "#4E4B4E" }}>
                  {rank}. {fullTitle}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* content */}

      {/* footer */}
      {others.isPaginating && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "90%",
              justifyContent: "space-between",
              marginVertical: 32,
            }}>
            {["Previous", "Next"].map((item, index) => (
              <Text
                {...{
                  key: item,
                  disabled: isPageState[index],
                  onPress: () => actions[index](),
                  style: {
                    color: isPageState[index] ? "#c4c4c4" : "#008080",
                  },
                }}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      )}
      {/* footer */}
    </ScrollView>
  );
};

export default HomeScreen;
