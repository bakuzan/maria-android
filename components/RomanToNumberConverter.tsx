import * as React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { convertToNumber, isValidRomanNumeral } from '@/utils/romanNumerals';

export default function RomanToNumberConverter() {
  const { colors } = useTheme();

  const [numeral, setNumeral] = React.useState<string>('');
  const hasValidNumeral = numeral !== '' && isValidRomanNumeral(numeral);

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View
        style={[styles.inputContainer, { borderBottomColor: colors.primary }]}
      >
        <Text>Roman numeral to convert</Text>
        <TextInput
          keyboardType="default"
          accessibilityLabel="Enter a roman numeral to convert to number"
          placeholder="Enter a roman numeral to convert to number"
          autoCapitalize="characters"
          value={numeral}
          onChangeText={(text) => setNumeral(text)}
          style={styles.input}
        />
      </View>
      {hasValidNumeral ? (
        <View style={styles.results}>
          <Text style={styles.result}>{convertToNumber(numeral)}</Text>
        </View>
      ) : (
        <View style={styles.results}>
          <Text style={styles.message}>
            Please enter a valid roman numeral.
          </Text>
          <Text style={styles.message}>
            Warning! Only numbers up to 3999 are supported.
          </Text>
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
  },
  message: {
    textAlign: 'center'
  }
});
