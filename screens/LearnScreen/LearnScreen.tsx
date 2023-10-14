import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { uiColors } from "../../constants/colors";

export function LearnScreen() {
  return (
    <View style={styles.screen}>
      <Text>Learn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
}
)