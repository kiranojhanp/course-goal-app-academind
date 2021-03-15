import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "ios" ? "white" : Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },

  headerAndroid: {
    backgroundColor: Colors.primary,
    borderColor: "transparent",
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
  },
});

export default Header;
