import { Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface NavIconProps {
  name: any;
  size: number;
  color: string;
  focused: boolean;
}

const Square = ({ size }: any) => {
  return <View style={{ backgroundColor: "black" }}></View>;
};

const AnimatedIcon = Animated.createAnimatedComponent(Octicons);

export function NavIcon({
  name,
  size: initSize,
  color,
  focused: focusedProp,
}: NavIconProps) {
  const size = useSharedValue(initSize);
  const focused = useSharedValue(focusedProp);

  const animatedProps = useAnimatedProps(() => {
    return {
      size: withSpring(size.value),
    };
  });

  useEffect(() => {
    if (focused) {
      size.value = size.value + 10;
    } else {
      size.value = initSize;
    }
  }, [focused]);

  useEffect(() => {
    focused.value = focusedProp;
  }, [focusedProp]);

  return (
    <AnimatedIcon name={name} color={color} animatedProps={animatedProps} />
  );
}
