import React from "react";
import { View, StyleSheet } from "react-native";
import { Swiping } from "../../components/Swiping";

export function LearnScreen() {
  return (
    <View style={styles.screen}>
      <Swiping />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
