import * as React from 'react';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NumberToRomanConverter from '@/components/NumberToRomanConverter';
import RomanToNumberConverter from '@/components/RomanToNumberConverter';

import { themeContrastColour } from '@/constants';

const Tab = createBottomTabNavigator();

export default function RomanNumerals() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.primary,
        activeTintColor: themeContrastColour,
        tabStyle: {
          flex: 1,
          justifyContent: 'center'
        },
        labelStyle: {
          fontSize: 16
        }
      }}
    >
      <Tab.Screen name="To Roman" component={NumberToRomanConverter} />
      <Tab.Screen name="To Number" component={RomanToNumberConverter} />
    </Tab.Navigator>
  );
}
