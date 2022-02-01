import React, { Fragment } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import container from "../styles/container";
import common from "../styles/common";
import icon from "../styles/icon";
import image from "../styles/image";
import color from "../styles/color";
import text from "../styles/text";
import card from "../styles/card";

const Banner = ({ uri, fullTitle, isLoading }) => (
  <View {...{ style: container.banner }}>
    <Image
      {...{
        source: require("../../assets/logo.png"),
        style: icon.logo,
      }}
    />
    <View {...{ style: card.bannerDefault }}>
      {isLoading ? (
        <View {...{ style: common.flexCenter }}>
          <ActivityIndicator color={color.black} />
        </View>
      ) : (
        <Fragment>
          <Image {...{ source: { uri }, style: image.full }} />
          <LinearGradient
            locations={[0, 1.0]}
            colors={["rgba(0,0,0,0.00)", "rgba(0,0,0,0.70)"]}
            style={{
              position: "absolute",
              ...image.full,
            }}
          />
          <View {...{ style: common.basicPaddingBottomLeft }}>
            <Text {...{ style: text.bannerHeader }}>Editor's Choice</Text>
            <Text {...{ style: text.bannerTitle }}>{fullTitle}</Text>
          </View>
        </Fragment>
      )}
    </View>
  </View>
);

export default Banner;
