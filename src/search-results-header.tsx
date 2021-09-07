import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "./index";

export default function SearchResultsHeader(props: {}) {
  console.log("SearchResultsHeader props", props);
  const { goBack, navigate } = useNavigation();
  return (
    <React.Fragment>
      <View style={[Styles.container]}>
        <Button
          title={"Back"}
          onPress={() => {
            goBack();
          }}
        />
        <Text style={[Styles.title]}>Search Results</Text>
        <Button
          title={"History"}
          onPress={() => {
            navigate(RouteNames.SearchHistoryContainer);
          }}
        />
      </View>
    </React.Fragment>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 10,
    fontSize: 15,
  },
});
