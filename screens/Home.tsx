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

  return (
    <View style={[styles.home, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate('Date Calculator')}
          style={[styles.btn, { backgroundColor: colors.primary }]}
          accessibilityLabel="Go to the date calculator"
        >
          <Text style={[styles.text, { color: themeContrastColour }]}>
            Date Calculator
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Settings')}
          style={[styles.btn, { backgroundColor: colors.primary }]}
          accessibilityLabel="Go to settings"
        >
          <Text style={[styles.text, { color: themeContrastColour }]}>
            Settings
          </Text>
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
