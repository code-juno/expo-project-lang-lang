import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
      if(!focused) scaleDownAnimation.value = (withSpring(0.8));
    })
    .onFinalize(() => {
      "worklet";
      scaleDownAnimation.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleDownAnimation.value }],
    flex: 1,
    width: '100%'

  }));
  const cColor = !!color ? color : "green";

  return (
    <GestureDetector gesture={scaleHandler}>
      <Animated.View style={animatedStyle}>
        <View style={styles.tabIconContainer}>
          <Ionicons name={name} color={cColor} size={size} />
          <Text style={{ fontSize: 12, color: cColor }}>{title}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {flex: 1, alignItems: 'center', justifyContent: 'center' }
})