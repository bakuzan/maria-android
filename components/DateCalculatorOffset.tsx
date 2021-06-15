import * as React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import formatDateForDisplay from '@/utils/formatDateForDisplay';
import offsetCalculator from '@/utils/offsetCalculator';

export default function Offset() {
  const { colors } = useTheme();

  const [num, setNum] = React.useState<number | null>(null);
  const result = offsetCalculator(num);
  const hasOffsetNumber = num !== null && num !== 0;

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View
        style={[styles.inputContainer, { borderBottomColor: colors.primary }]}
      >
        <Text>Day Offset</Text>
        <TextInput
          keyboardType="numeric"
          accessibilityLabel="Enter number of days offset from today"
          placeholder="Enter number of days offset from today"
          value={num ? `${num}` : ''}
          onChangeText={(text) => setNum(Number(text))}
          style={styles.input}
        />
      </View>
      {hasOffsetNumber ? (
        <View style={styles.results}>
          <Text>
            {num} days from {formatDateForDisplay(new Date())} is
          </Text>
          <Text style={styles.result}>{result}</Text>
        </View>
      ) : (
        <View style={styles.results}>
          <Text>Please enter a valid day offset.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomWidth: 1,
    marginVertical: 8
  },
  input: {
    textAlign: 'right'
  },
  results: {
    margin: 16,
    minHeight: 48
  },
  result: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
