import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
    color: "red",
  },
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginTop: Dimensions.get("window").height / 35,
  },
});
