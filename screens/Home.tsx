import * as React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackList, themeContrastColour } from '@/constants';

type Props = {
  navigation: StackNavigationProp<RootStackList, 'Home'>;
};

export default function Home({ navigation }: Props) {
  const { colors } = useTheme();
  const btnStyles = [styles.btn, { backgroundColor: colors.primary }];
  const btnTextStyles = [styles.text, { color: themeContrastColour }];

  return (
    <View style={[styles.home, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate('Date Calculator')}
          style={btnStyles}
          accessibilityLabel="Go to the date calculator"
        >
          <Text style={btnTextStyles}>Date Calculator</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Roman Numeral Converter')}
          style={btnStyles}
          accessibilityLabel="Go to the roman numeral converter"
        >
          <Text style={btnTextStyles}>Roman Numeral Converter</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Settings')}
          style={btnStyles}
          accessibilityLabel="Go to settings"
        >
          <Text style={btnTextStyles}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  container: {
    width: '50%',
    margin: 'auto'
  },
  btn: {
    width: '100%',
    padding: 5,
    margin: 5
  },
  text: {
    textAlign: 'center'
  }
});
