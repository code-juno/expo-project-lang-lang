import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from "./components/navigators";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { lightTheme } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={lightTheme}>
          <BottomTabNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
