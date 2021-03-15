import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={{ fontSize: 25 }}>Game Over</TitleText>

        <View
          style={{
            ...styles.imgContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          }}
        >
          <Image
            // fadeDuration={1000}
            style={styles.image}
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://i.pinimg.com/originals/7b/f1/d1/7bf1d1a24f3e6d434e8c9cc5f515700b.gif",
            // }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            ...{
              marginVertical: availableDeviceHeight / 60,
            },
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              ...{
                fontSize: availableDeviceHeight < 400 ? 16 : 20,
              },
            }}
          >
            The number was
            <Text style={styles.highlight}>{" " + props.userChoice + " "}</Text>
            <Text>
              and it took{" "}
              <Text style={styles.highlight}>{props.gameRounds + " "}</Text>
              moves to guess the number
            </Text>
          </BodyText>
        </View>
        <MainButton onPress={props.newGameAction}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imgContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
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
    fontSize: Dimensions.get("window").height < 400 ? 60 : 20,
  },
});

export default GameOverScreen;
