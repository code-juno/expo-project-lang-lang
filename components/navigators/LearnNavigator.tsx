import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LearnScreen } from "../../screens";

const Tab = createNativeStackNavigator();

export function LearnNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Learn" component={LearnScreen} />
    </Tab.Navigator>
  );
}
