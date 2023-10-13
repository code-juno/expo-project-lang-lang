import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileNavigator } from "./ProfileNavigator";
import { PlayNavigator } from "./PlayNavigator";
import { LearnNavigator } from "./LearnNavigator";
import { Ionicons } from "@expo/vector-icons";
import { NavIcon } from "../ui";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="LearnNavigator"
        component={LearnNavigator}
        options={{
          title: "Learn",
          tabBarLabel: "Learn",
          tabBarIcon: (props) => <NavIcon name="book" {...props} />,
        }}
      />
      <Tab.Screen
        name="PlayNavigator"
        component={PlayNavigator}
        options={{
          title: "Play",
          tabBarLabel: "Play",
          tabBarIcon: (props) => <NavIcon name="rocket" {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: (props) => <NavIcon name="person" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
