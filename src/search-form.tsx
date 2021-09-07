import React from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { AppContext, T_Search_Item } from "./app-context";
import { searchImages } from "./app-controller";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "./index";

export default function SearchForm() {
  const [searchText, setSearchText] = React.useState("kittens");

  const { navigate } = useNavigation();

  const { updateSearchHistory } = React.useContext(AppContext);

  return (
    <ScrollView
      style={[Styles.container]}
      contentContainerStyle={[Styles.contentContainer]}>
      <Button
        title={"View History"}
        onPress={() => {
          navigate(RouteNames.SearchHistoryContainer);
        }}
      />
      <View style={[Styles.divider]} />
      <TextInput
        style={[Styles.searchInput]}
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
        }}
        placeholder={"Enter search term"}
        placeholderTextColor={"red"}
      />
      <View style={[Styles.divider]} />
      <Button
        title={"Search"}
        onPress={() => {
          if (searchText.trim() === "") {
            Alert.alert("Enter search term", "Enter a term to search");
            return;
          }
          const searchItem: T_Search_Item = {
            searchTerm: searchText,
            searchTime: new Date(),
          };
          updateSearchHistory(searchItem);
          searchImages(searchText).then(data => {
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
        }}
      />
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {},
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
  },
  divider: {
    height: 20,
  },
});
