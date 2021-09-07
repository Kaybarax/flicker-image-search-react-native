import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

const ScreenWidth = Dimensions.get("window").width;

export default function SearchResultItem(props: { imageUri: string }) {
  console.log("SearchResultItem props", props);
  return (
    <View style={[Styles.container]}>
      <Image
        source={{ uri: props.imageUri }}
        style={Styles.photoStyle}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {},
  photoStyle: {
    width: ScreenWidth * 0.5,
    height: ScreenWidth * 0.5,
  },
});
