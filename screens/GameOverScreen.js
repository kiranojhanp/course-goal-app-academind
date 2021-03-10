import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={{ fontSize: 25 }}>Game Over</TitleText>

      <View style={styles.imgContainer}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          source={require("../assets/congrats.gif")}
          // source={{
          //   uri:
          //     "https://i.pinimg.com/originals/7b/f1/d1/7bf1d1a24f3e6d434e8c9cc5f515700b.gif",
          // }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          The number was
          <Text style={styles.highlight}>{" " + props.userChoice + " "}</Text>
          <Text>
            and it took{" "}
            <Text style={styles.highlight}>{props.gameRounds + " "}</Text>
            moves to guess the number
          </Text>
        </BodyText>
      </View>
      <Button title="NEW GAME" onPress={props.newGameAction} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginVertical: 15,
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
