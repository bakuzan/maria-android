import * as React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { convertToRoman, isValidNumber } from '@/utils/romanNumerals';

export default function NumberToRomanConverter() {
  const { colors } = useTheme();

  const [num, setNum] = React.useState<number | null>(null);
  const hasValidNumber = num !== null && num !== 0 && isValidNumber(num);

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View
        style={[styles.inputContainer, { borderBottomColor: colors.primary }]}
      >
        <Text>Number to convert</Text>
        <TextInput
          keyboardType="numeric"
          accessibilityLabel="Enter number to convert to roman numerals"
          placeholder="Enter number to convert to roman numerals"
          value={num ? `${num}` : ''}
          onChangeText={(text) => setNum(Number(text))}
          style={styles.input}
        />
      </View>
      {hasValidNumber && num !== null ? (
        <View style={styles.results}>
          <Text style={styles.result}>{convertToRoman(num)}</Text>
        </View>
      ) : (
        <View style={styles.results}>
          <Text>Please enter a number greater than 0, but less than 4000.</Text>
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
