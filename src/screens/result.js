import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const TriviaResultScreen = ({
  route: { params },
  navigation: { navigate },
}) => {
  const { score } = params;

  const ACTUAL_SCORE = score / 10;

  function _onProvideVerdict() {
    let result;
    if (ACTUAL_SCORE <= 3) {
      result = {
        title: "Oh Sorry",
        icon: require("../../assets/newb.png"),
        color: "#C83758",
      };
    } else if (ACTUAL_SCORE <= 7) {
      result = {
        title: "Not Bad",
        icon: require("../../assets/cat.png"),
        color: "#E9D816",
      };
    } else {
      result = {
        title: "Congratz",
        icon: require("../../assets/trophy.png"),
        color: "#3EC639",
      };
    }
    return result;
  }

  return (
    <LinearGradient
      colors={["#008080", "#385D6D"]}
      {...{
        style: { flex: 1, borderRadius: 5 },
      }}>
      {/* content */}
      <View style={{ height: "80%", justifyContent: "flex-end", bottom: 32 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 16,
            marginHorizontal: 24,
            height: "80%",
            borderRadius: 8,
          }}>
          {/* Logo */}
          <View
            style={{
              flex: 0.4,
              justifyContent: "flex-end",
              alignItems: "center",
            }}>
            <Image
              source={_onProvideVerdict().icon}
              style={{ height: 120, width: 120, bottom: 16 }}
            />
          </View>

          {/* Logo */}

          {/* Score */}
          <View style={{ flex: 0.2, alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {_onProvideVerdict().title}!
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                top: 4,
                color: _onProvideVerdict().color,
              }}>
              Score {score}%
            </Text>
          </View>

          {/* Score */}

          {/* Title */}
          <View style={{ flex: 0.1, alignItems: "center", top: 16 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Trivia Completed Successfully!
            </Text>
          </View>

          {/* Title */}

          {/* Subtitle */}
          <View
            style={{ flex: 0.3, alignItems: "center", marginHorizontal: 40 }}>
            <Text style={{ textAlign: "center", lineHeight: 20 }}>
              You answered total of{" "}
              <Text style={{ color: "#0000FF" }}>
                10 film related questions{" "}
              </Text>
              and from that {ACTUAL_SCORE} {ACTUAL_SCORE <= 1 ? "is" : "are"}{" "}
              correct.
            </Text>
          </View>

          {/* Subtitle */}
        </View>
      </View>
      {/* content */}

      {/* footer */}
      <View
        style={{
          height: "20%",
          alignItems: "center",
        }}>
        <TouchableOpacity
          onPress={() => navigate("Trivia")}
          style={{
            backgroundColor: "#808000",
            width: "50%",
            padding: 16,
            borderRadius: 24,
          }}>
          <Text style={{ textAlign: "center", color: "#fff" }}>
            Return to Home
          </Text>
        </TouchableOpacity>
      </View>
      {/* footer */}
    </LinearGradient>
  );
};

export default TriviaResultScreen;
