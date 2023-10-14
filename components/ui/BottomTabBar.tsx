import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavIcon } from './NavIcon';


export function BottomTabBar({ state, navigation, descriptors }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;
        const color = isFocused ? (options?.tabBarActiveTintColor ?? "red") : (options?.tabBarInactiveTintColor ?? "grey")

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
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
            type: 'tabLongPress',
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
            style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}
            key={route.name}
          >
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
              {options.tabBarIcon?.({focused: isFocused, color: color, size: 30})}
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: { flexDirection: 'row', height: 60 }
})