import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { globalColors, uiColors } from "../../constants/colors";

export function AppBackground({ navigationRef }: any) {
  const [routeState, setRouteState] = useState<any>();
  const progress = useDerivedValue(() => {
    let value;
    switch (routeState?.name) {
      case "Learn":
        value = 0.5;
        break;
      case "Play":
        value = 1.0;
        break;
      case "Profile":
        value = 1.5;
        break;
      default:
        value = 0;
    }
    return withTiming(value, { duration: 200 });
  }, [routeState]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0.0, 0.5, 1, 1.5],
        [
          globalColors.neutral,
          uiColors.background.learn,
          uiColors.background.play,
          uiColors.background.profile,
        ]
      ),
    };
  });

  useEffect(() => {
    navigationRef.addListener("state", (e: any) => {
      setRouteState(navigationRef.getCurrentRoute());
    });
  }, [navigationRef]);

  return <Animated.View style={[styles.appBackground, animatedStyle]} />;
}

const styles = StyleSheet.create({
  appBackground: {
    position: "absolute",
    flex: 1,
    height: 5000,
    width: 5000,
    top: 0,
  },
});
