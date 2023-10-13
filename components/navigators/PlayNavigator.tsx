import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayScreen } from "../../screens";

const Tab = createNativeStackNavigator();

export function PlayNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Play" component={PlayScreen} />
    </Tab.Navigator>
  );
}
