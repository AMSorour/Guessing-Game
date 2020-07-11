import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg",
          // }}
        />
      </View>
      <View style={styles.fullContainer}>
        <BodyText style={styles.resultContainer}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>{" "}
        </BodyText>
      </View>
      <MainButton onPress={props.restart}>New Game</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    fontSize: 25,
    textAlign: "center",
  },
  fullContainer: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
