import React from "react";

export type T_Search_Item = { searchTerm: string; searchTime: Date };

export const AppContext = React.createContext({
  searchItems: [] as Array<T_Search_Item>,
  updateSearchHistory(searchItem: T_Search_Item) {
    console.log("updateSearchHistory searchItem", searchItem);
  },
});
