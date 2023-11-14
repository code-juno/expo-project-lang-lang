import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./BottomTabNavigator";
import React from "react";

export function AppNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
