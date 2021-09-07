import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SearchResults from "./search-results";
import SearchResultsHeader from "./search-results-header";

const ScreenHeight = Dimensions.get("window").height;

export default function SearchResultsContainer(props: any) {
  console.log("SearchResultsContainer props", props);
  const {
    route: {
      params: { photos },
    },
  } = props;
  return (
    <View>
      <View style={[Styles.header]}>
        <SearchResultsHeader />
      </View>
      <View style={[Styles.container]}>
        <SearchResults photos={photos} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {},
  header: {
    height: ScreenHeight * 0.075,
    marginTop: 60,
  },
});
