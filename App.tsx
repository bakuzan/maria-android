import 'react-native-gesture-handler';
import * as React from 'react';
import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Home from './screens/Home';
import DateCalculator from './screens/DateCalculator';

import { themeColour, themeContrastColour, RootStackList } from './constants';
import getAppTheme from './theme';

const Stack = createStackNavigator<RootStackList>();

export default function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={getAppTheme(scheme)}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: Header,
          headerStyle: {
            backgroundColor: themeColour
          },
          headerTintColor: themeContrastColour,
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Maria' }}
        />
        <Stack.Screen
          name="Date Calculator"
          component={DateCalculator}
          options={{
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 16
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
