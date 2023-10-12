import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homepage } from './screens/Homepage';
import { LearnScreen } from './screens/LearnScreen/LearnScreen';
import { PlayScreen } from './screens/PlayScreen';
import { ReviewScreen } from './screens/ReviewScreen/ReviewScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="LearnScreen" component={LearnScreen}/>
        <Stack.Screen name="PlayScreen" component={PlayScreen}/>
        <Stack.Screen name="ReviewScreen" component={ReviewScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
