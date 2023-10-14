import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileNavigator } from "./ProfileNavigator";
import { PlayNavigator } from "./PlayNavigator";
import { LearnNavigator } from "./LearnNavigator";

import { BottomTabBar, NavIcon } from "../ui";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }} tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="LearnNavigator"
        component={LearnNavigator}
        options={{
          tabBarIcon: (props) => <NavIcon name="book" title="Learn" {...props} />,
        }}
      />
      <Tab.Screen
        name="PlayNavigator"
        component={PlayNavigator}
        options={{
          tabBarIcon: (props) => <NavIcon name="rocket" title="Play" {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: (props) => <NavIcon name="person" title="Profile" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
