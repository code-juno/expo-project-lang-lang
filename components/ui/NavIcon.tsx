import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface NavIconProps {
  name: any;
  size: number;
  color: string;
  focused: boolean;
  title: string;
}

export function NavIcon({ name, size, color, focused, title }: NavIconProps) {
  const scaleDownAnimation = useSharedValue(1);

  const scaleHandler = Gesture.Tap()
    .onBegin(() => {
      "worklet";
      scaleDownAnimation.value = withSpring(0.8);
    })
    .onFinalize(() => {
      "worklet";
      scaleDownAnimation.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleDownAnimation.value }],
  }));

  return (
    <GestureDetector gesture={scaleHandler}>
      <Animated.View style={animatedStyle}>
        <View style={{ flex: 1 }}>
          <Ionicons name={name} color={color} size={size} />
          <Text style={{fontSize: 20, color: 'black'}}>{title}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}
