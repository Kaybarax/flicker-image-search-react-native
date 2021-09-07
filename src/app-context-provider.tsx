import React from "react";
import { AppContext, T_Search_Item } from "./app-context";

export default function AppContextProvider(props: any) {
  const [searchItems, setSearchItemHistory] = React.useState<
    Array<T_Search_Item>
  >([]);

  const updateSearchHistory = React.useCallback(
    (searchItem: T_Search_Item) => {
      searchItem.searchTime = new Date();
      searchItems.unshift(searchItem);
      setSearchItemHistory([...searchItems]);
    },
    [searchItems],
  );

  const appContext = React.useMemo(
    () => ({
      searchItems,
      updateSearchHistory,
    }),
    [searchItems, updateSearchHistory],
  );

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
}
