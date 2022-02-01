import React, { Fragment } from "react";
import * as UI from "react-native";
import common from "../styles/common";
import text from "../styles/text";
import color from "../styles/color";
import container from "../styles/container";
import card from "../styles/card";

const { View, Text, Image, TouchableOpacity, ActivityIndicator } = UI;

const TopMovieCard = ({
  currentPage,
  totalPages,
  pageItems,
  isLoading,
  navigate,
}) => (
  <Fragment>
    <View {...{ style: common.topMovie }}>
      <Text
        style={{
          ...text.verdictTitle,
          paddingBottom: 8,
          color: color.secondary,
        }}>
        Top 250 Movies
      </Text>
      {pageItems.length !== 0 && (
        <Text
          {...{
            style: text.pagination,
          }}>{`Page ${currentPage} of ${totalPages}`}</Text>
      )}
    </View>
    <View {...{ style: common.flexCenter }}>
      <View {...{ style: container.topMovies }}>
        {isLoading && (
          <View {...{ style: { ...common.flexCenter, paddingTop: 24 } }}>
            <ActivityIndicator color={color.black} />
          </View>
        )}
        {pageItems.map(({ fullTitle, image, rank, id }) => (
          <TouchableOpacity
            {...{
              onPress: () => navigate("Details", { id }),
              key: fullTitle,
              style: card.topMovie,
            }}>
            <Image
              {...{ source: { uri: image } }}
              style={{
                width: "100%",
                height: 240,
                overflow: "hidden",
                borderRadius: 8,
              }}
            />
            <View style={{ height: 50, justifyContent: "center" }}>
              <Text numberOfLines={2} style={text.verdictSubTitle}>
                {rank}. {fullTitle}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </Fragment>
);

export default TopMovieCard;
