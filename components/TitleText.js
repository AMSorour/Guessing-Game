import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TitleText(props) {
  return <Text style={[styles.body, props.style]}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  body: { fontFamily: "open-sans-bold", fontSize: 18 },
});
