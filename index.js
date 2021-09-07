/**
 * @format
 */

import { AppRegistry, LogBox } from "react-native";
import ImageSearchApp from "./src";
import { name as appName } from "./app.json";

//ignore dev inconsequential logs
LogBox.ignoreAllLogs(true);

//manage runtime errors, warnings and logs feedback
if (__DEV__) {
  // @ts-ignore
  if (global.location && global.location.pathname.includes("/debugger-ui")) {
    // control in-development unnecessary console warnings, e.g. to manage log noise.
    // console.warn = (...args) => {
    // 	// null;
    // };
    // console.error = (...args) => {
    // 	// null;
    // };
    // console.log = (...args) => {
    // 	// null;
    // };
  } else {
    //disable all warnings, errors, and logs when not
    //remote debugging during development
    console.warn = (...args) => {
      // null;
    };
    console.error = (...args) => {
      // null;
    };
    console.log = (...args) => {
      // null;
    };
  }
} else {
  //disable all warnings, errors, and logs in release
  console.warn = (...args) => {
    // null;
  };
  console.error = (...args) => {
    // null;
  };
  console.log = (...args) => {
    // null;
  };
}

AppRegistry.registerComponent(appName, () => ImageSearchApp);
