import React from "react";
import { View, Text } from "react-native";
import { NavIcon } from "../../components/ui";

export function LearnScreen() {
  return (
    <View>
      <Text>Learn</Text>
      <NavIcon name="person" size={25} color={""} focused={true} />
    </View>
  );
}
