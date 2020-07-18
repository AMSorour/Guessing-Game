import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import TitleText from "../components/TitleText";

export default function Header(props) {
  return (
    <View
      style={[
        styles.header,
        Platform.select({ ios: headerIOS, android: headerAndroid }),
      ]}
    >
      <TitleText style={styles.headerText}>{props.title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 100,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerText: {
    color: (Platform.OS = "ios" ? Colors.primary : "white"),
    fontSize: 18,
  },
});
