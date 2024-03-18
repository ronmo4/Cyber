import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import FAQScreen from './Screens/fqaScreen/faqScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <FAQScreen />
      <StatusBar style="auto" />
    </View>
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
