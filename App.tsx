import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { CitiesContextProvider } from './src/contexts/CitiesContext';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <CitiesContextProvider>
        {fontsLoaded ? <Routes /> : <AppLoading />}
      </CitiesContextProvider>
    </>
  );
}
