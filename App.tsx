import 'react-native-gesture-handler';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackCardStyleInterpolator
} from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import Home from './screens/Home';
import DateCalculator from './screens/DateCalculator';
import Settings from './screens/Settings';

import getAudioFile from '@/utils/getAudioFile';
import storage from '@/utils/storage';

import {
  themeColour,
  themeContrastColour,
  RootStackList,
  MariaAssetFileNames
} from './constants';
import getAppTheme from './theme';

const Stack = createStackNavigator<RootStackList>();

const cardStyleInterpolator: StackCardStyleInterpolator = ({ current }) => ({
  cardStyle: {
    opacity: current.progress
  }
});

export default function App() {
  const scheme = useColorScheme();
  const [isReady, setIsReady] = React.useState(false);

  async function onAppLoading() {
    const store = await storage.getData();

    if (store.success && store.data.playGreeting) {
      const voice = await getAudioFile(MariaAssetFileNames.Greeting);
      await voice.playAsync();
    }
  }

  if (!isReady) {
    return (
      <AppLoading
        autoHideSplash
        startAsync={onAppLoading}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer theme={getAppTheme(scheme)}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: Header,
          headerStyle: {
            backgroundColor: themeColour
          },
          headerTintColor: themeContrastColour,
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ cardStyleInterpolator, title: 'Maria' }}
        />
        <Stack.Screen
          name="Date Calculator"
          component={DateCalculator}
          options={{
            cardStyleInterpolator,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 16
            }
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ cardStyleInterpolator }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
