import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
} from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Hello, World");
  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TextInput placeholder="Please enter a name" style={styles.textInput} />
        <Button title="ADD" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TextInput placeholder="Please enter a name" style={styles.textInput} />
        <Button title="ADD" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TextInput placeholder="Please enter a name" style={styles.textInput} />
        <Button title="ADD" />
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInput: {
    height: 30,
    width: "50%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
