import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/navigators";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { lightTheme } from "./constants/colors";
import { AppBackground } from "./components/ui/AppBackground";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={lightTheme}>
          <AppBackground />
          <BottomTabNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
