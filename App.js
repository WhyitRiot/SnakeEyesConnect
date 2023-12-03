import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import Home from './src/screens/Home'
import Alerts from './src/screens/Alerts'
import Buttons from './src/components/Buttons'

const Stack = createNativeStackNavigator();

const App = () => {
  //const notif = Notifications();
  return (
    <NavigationContainer>
      <Buttons />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;