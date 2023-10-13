import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LearnScreen, PlayScreen, ProfileScreen } from "../../screens";
import { ProfileNavigator } from "./ProfileNavigator";
import { PlayNavigator } from "./PlayNavigator";
import { LearnNavigator } from "./LearnNavigator";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="LearnNavigator" component={LearnNavigator} />
      <Tab.Screen name="PlayNavigator" component={PlayNavigator} />
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
