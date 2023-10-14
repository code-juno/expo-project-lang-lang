import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { AppBackground } from "../ui/AppBackground";
import { BottomTabNavigator } from "./BottomTabNavigator";
import React from "react";
import { lightTheme } from "../../constants/colors";

export function AppNavigator() {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef} theme={lightTheme}>
      <AppBackground navigationRef={navigationRef} />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
