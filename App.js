import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

// Navigation
import MealsNavigator from "./navigation/MealsNavigator";

import { Provider } from "react-redux";

import mealsReducer from "./store/reducers/meals";
import { createStore, combineReducers } from "redux";

enableScreens();

// For redux store
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
        <MealsNavigator />
    </Provider>
    // <StatusBar style="dark" />
  );
}
