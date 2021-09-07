import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SearchHistoryHeader(props: {}) {
  console.log("SearchHistoryHeader props", props);
  const { goBack } = useNavigation();
  return (
    <React.Fragment>
      <View style={[Styles.container]}>
        <Button
          title={"Back"}
          onPress={() => {
            goBack();
          }}
        />
        <Text style={[Styles.title]}>Search History</Text>
        <View />
      </View>
    </React.Fragment>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginTop: 10,
    fontSize: 15,
  },
});
