import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props) => {
  return <Text style={StyleSheet.defaultText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "open-sans",
  },
});

export default DefaultText;
