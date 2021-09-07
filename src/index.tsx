import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchForm from "./search-form";
import AppContextProvider from "./app-context-provider";
import SearchResultsContainer from "./search-results-container";
import SearchHistoryContainer from "./search-history-container";

const AppStackNavigation = createStackNavigator();

export const RouteNames = {
  SearchForm: "Search Form",
  SearchResultsContainer: "Search Results",
  SearchHistoryContainer: "Search History",
};

const AppRouteMap = [
  <AppStackNavigation.Screen
    name={RouteNames.SearchForm}
    component={SearchForm}
    key={1}
  />,
  <AppStackNavigation.Screen
    name={RouteNames.SearchResultsContainer}
    component={SearchResultsContainer}
    key={2}
  />,
  <AppStackNavigation.Screen
    name={RouteNames.SearchHistoryContainer}
    component={SearchHistoryContainer}
    key={3}
  />,
];

export default function () {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <NavigationContainer>
          <AppStackNavigation.Navigator
            children={AppRouteMap}
            initialRouteName={"SearchForm"}
            screenOptions={{
              headerShown: false,
            }}
          />
        </NavigationContainer>
      </AppContextProvider>
    </SafeAreaProvider>
  );
}
