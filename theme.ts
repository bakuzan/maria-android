import { ColorSchemeName } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import { baseColour, themeColour } from './constants';

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: themeColour,
    background: baseColour
  }
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: themeColour
  }
};

export default function getAppTheme(scheme: ColorSchemeName) {
  return scheme === 'dark' ? MyDarkTheme : MyDefaultTheme;
}
