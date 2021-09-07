import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AppContext } from "./app-context";
import SearchHistoryItem from "./search-history-item";

export default function SearchHistory(props: {}) {
  console.log("SearchHistory props", props);
  const { searchItems } = React.useContext(AppContext);
  console.log("SearchHistory searchItems", searchItems);
  return (
    <React.Fragment>
      <View style={[Styles.container]}>
        <FlatList
          data={searchItems}
          renderItem={({ item }) => (
            <SearchHistoryItem
              term={item.searchTerm}
              dateTime={item.searchTime.toLocaleString()}
            />
          )}
        />
      </View>
    </React.Fragment>
  );
}

const Styles = StyleSheet.create({
  container: {},
});
