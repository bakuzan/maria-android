import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackList } from '@/constants';

type Props = {
  navigation: StackNavigationProp<RootStackList, 'Home'>;
};

export default function Home({ navigation }: Props) {
  const { colors } = useTheme();

  return (
    <View style={[styles.home, { backgroundColor: colors.background }]}>
      <Button
        onPress={() => navigation.navigate('Date Calculator')}
        title="Date Calculator"
        color={colors.primary}
        accessibilityLabel="Go to the date calculator"
      />
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
  }
});
