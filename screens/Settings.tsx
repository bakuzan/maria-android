import * as React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Switch,
  Text
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import storage, { UserSettings } from '@/utils/storage';

import { RootStackList } from '@/constants';

type Props = {
  navigation: StackNavigationProp<RootStackList, 'Settings'>;
};

export default function Settings({ navigation }: Props) {
  const { colors } = useTheme();
  const [storeData, setStoreData] = React.useState<UserSettings | null>(null);

  async function loadStore() {
    const d = await storage.getData();

    if (d.success) {
      setStoreData(d.data);
    } else {
      // todo handle error state...
    }
  }

  React.useEffect(() => {
    if (!storeData) {
      loadStore();
    }
  }, [storeData]);

  if (!storeData) {
    return (
      <View style={[styles.page, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  // Thumb colours
  const primary = colors.primary;
  const virtuallyWhite = '#f4f3f4';

  // Track colours
  const crimson = '#dc143c';
  const romanSilver = '#838996';

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View style={styles.control}>
        <Switch
          trackColor={{ true: crimson, false: romanSilver }}
          thumbColor={storeData.playGreeting ? primary : virtuallyWhite}
          ios_backgroundColor={colors.background}
          accessibilityLabel="Play greeting on start up"
          value={storeData.playGreeting}
          onValueChange={async (value) => {
            const updated = await storage.storeData({ playGreeting: value });

            if (updated.success) {
              setStoreData(updated.data);
            } else {
              // todo handle error state...
            }
          }}
        />
        <Text>Play greeting on start up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  control: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 24
  }
});
