import * as React from 'react';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Duration from '@/components/DateCalculatorDuration';
import Offset from '@/components/DateCalculatorOffset';

import { themeContrastColour } from '@/constants';

const Tab = createBottomTabNavigator();

export default function DateCalculator() {
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
      <Tab.Screen name="Offset" component={Offset} />
      <Tab.Screen name="Duration" component={Duration} />
    </Tab.Navigator>
  );
}
