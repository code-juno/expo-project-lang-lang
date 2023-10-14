import React from "react";
import { View } from "react-native";

export function AppBackground() {
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "blue",
        flex: 1,
        height: 5000,
        width: 5000,
        top: 0,
      }}
    />
  );
}