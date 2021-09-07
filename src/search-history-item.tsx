import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppContext, T_Search_Item } from "./app-context";
import { searchImages } from "./app-controller";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "./index";

export default function SearchHistoryItem(props: {
  term: string;
  dateTime: string;
}) {
  console.log("SearchHistoryItem props", props);
  const { navigate } = useNavigation();
  const { updateSearchHistory } = React.useContext(AppContext);
  const repeatSearch = React.useCallback(
    (term: string) => {
      Alert.alert("Search again", `Search again for ${term}`, [
        {
          text: "Confirm",
          onPress: () => {
            const searchItem: T_Search_Item = {
              searchTerm: term,
              searchTime: new Date(),
            };
            updateSearchHistory(searchItem);
            const { searchTerm } = searchItem;
            searchImages(searchTerm).then(data => {
              console.log("searchImages data", data);
              if (data?.["stat"] !== "ok") {
                Alert.alert("Search failed", "Image search failed");
                return;
              }
              const photos = data?.photos?.photo;
              if (photos?.length <= 0) {
                Alert.alert("No items found", "No items found");
                return;
              }
              navigate(RouteNames.SearchResultsContainer, { photos });
            });
          },
        },
        {
          text: "Cancel",
          onPress: () => {},
        },
      ]);
    },
    [navigate, updateSearchHistory],
  );
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        repeatSearch(props.term);
      }}
      style={[Styles.container]}>
      <Text style={[Styles.content1]}>{props.term}</Text>
      <Text style={[Styles.content2]}>{props.dateTime}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content1: {
    width: "50%",
    paddingHorizontal: 10,
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  content2: {
    width: "50%",
    paddingHorizontal: 10,
    alignItems: "flex-end",
    paddingVertical: 10,
  },
});
