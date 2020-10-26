import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from './src/routes/TabBar';
import {Nunito_600SemiBold,Nunito_700Bold,Nunito_400Regular, useFonts} from '@expo-google-fonts/nunito'
import Stack from './src/routes/Stack';
export default function App() {

  const [fonstLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_400Regular
  })
if(!fonstLoaded){
  return null;
}
  return (
    <>
     
      <Stack/>
    </>

  );
}


