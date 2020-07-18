import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

export default function GameOverScreen(props) {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setDeviceWidth(Dimensions.get("window").width);
      setDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View
          style={[
            styles.imageContainer,
            {
              width: deviceWidth * 0.5,
              height: deviceWidth * 0.5,
              borderRadius: (deviceWidth * 0.5) / 2,
              marginVertical: deviceHeight / 30,
            },
          ]}
        >
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg",
            // }}
          />
        </View>
        <View
          style={[styles.fullContainer, { marginVertical: deviceHeight / 100 }]}
        >
          <BodyText
            style={[
              styles.resultContainer,
              { fontSize: deviceHeight < 420 ? 17 : 20 },
            ]}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>{" "}
          </BodyText>
        </View>
        <MainButton onPress={props.restart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    textAlign: "center",
  },
  fullContainer: {
    marginHorizontal: 18,
  },
});
