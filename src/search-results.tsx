import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchResultItem from "./search-result-item";

export default function SearchResults(props: { photos: Array<any> }) {
  console.log("SearchResults props", props);
  return (
    <React.Fragment>
      <View style={[Styles.container]}>
        <FlatList
          data={props.photos}
          renderItem={({ item }) => (
            <SearchResultItem
              imageUri={`https://farm${item?.farm}.static.flickr.com/${item?.server}/${item?.id}_${item?.secret}.jpg`}
            />
          )}
          keyExtractor={(item, index) => "" + index}
          numColumns={2}
        />
      </View>
    </React.Fragment>
  );
}

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
