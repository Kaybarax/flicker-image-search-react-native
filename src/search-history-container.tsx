import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SearchHistory from "./search-history";
import SearchHistoryHeader from "./search-history-header";

const ScreenHeight = Dimensions.get("window").height;

export default function SearchHistoryContainer(props: {}) {
  console.log("SearchHistoryContainer props", props);
  return (
    <React.Fragment>
      <View style={[Styles.header]}>
        <SearchHistoryHeader />
      </View>
      <View style={[Styles.container]}>
        <SearchHistory />
      </View>
    </React.Fragment>
  );
}

const Styles = StyleSheet.create({
  container: {},
  header: {
    height: ScreenHeight * 0.05,
    marginTop: 40,
  },
});
