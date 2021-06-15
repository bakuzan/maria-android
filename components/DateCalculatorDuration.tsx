import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import { useTheme } from '@react-navigation/native';

import formatDateForDisplay from '@/utils/formatDateForDisplay';
import durationCalculator from '@/utils/durationCalculator';

export default function Duration() {
  const { colors } = useTheme();

  const [showFrom, setShowFrom] = React.useState(false);
  const [fromDate, setFromDate] = React.useState(new Date());

  const [showTo, setShowTo] = React.useState(false);
  const [toDate, setToDate] = React.useState(new Date());

  const result = durationCalculator(fromDate, toDate);

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View style={styles.controls}>
        <View
          style={[styles.inputContainer, { borderBottomColor: colors.primary }]}
        >
          <Button
            color={colors.primary}
            title="From"
            onPress={() => setShowFrom(true)}
          />
          <Text>{formatDateForDisplay(fromDate)}</Text>
          {showFrom && (
            <DatePicker
              testID="fromDatePicker"
              accessibilityLabel="Enter from date"
              value={fromDate}
              maximumDate={toDate}
              onChange={(_: any, d: Date | undefined) => {
                setShowFrom(false);
                setFromDate((p) => d || p);
              }}
            />
          )}
        </View>
        <View
          style={[styles.inputContainer, { borderBottomColor: colors.primary }]}
        >
          <Button
            color={colors.primary}
            title="To"
            onPress={() => setShowTo(true)}
          />
          <Text>{formatDateForDisplay(toDate)}</Text>
          {showTo && (
            <DatePicker
              testID="toDatePicker"
              accessibilityLabel="Enter to date"
              value={toDate}
              minimumDate={fromDate}
              onChange={(_: any, d: Date | undefined) => {
                setShowTo(false);
                setToDate((p) => d || p);
              }}
            />
          )}
        </View>
      </View>
      <View style={styles.results}>
        <Text style={styles.result}>{result} </Text>
        <Text>between the dates.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  controls: {
    flexDirection: 'row'
  },
  inputContainer: {
    borderBottomWidth: 1,
    marginHorizontal: 4,
    marginVertical: 8
  },
  results: {
    flexDirection: 'row',
    margin: 16,
    minHeight: 48
  },
  result: {
    fontWeight: 'bold'
  }
});
