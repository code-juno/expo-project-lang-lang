import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { BOTTOM_TAB_HEIGHT, BOTTOM_TAB_ICON_SIZE } from "../../constants/sizes";
import { uiColors } from "../../constants/colors";

export function BottomTabBar({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;
        const color = isFocused
          ? (options?.tabBarActiveTintColor ?? uiColors.tabIconActive)
          : (options?.tabBarInactiveTintColor ?? uiColors.tabIconInactive);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}
          >
            <View style={styles.tabBarIconContainer}>
              {options.tabBarIcon?.({
                focused: isFocused,
                color: color,
                size: BOTTOM_TAB_ICON_SIZE,
              })}
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: { flexDirection: "row", height: BOTTOM_TAB_HEIGHT },
  tabBarIconContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
