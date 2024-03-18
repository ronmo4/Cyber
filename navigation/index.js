// App.js
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import faqScreen from '../Screens/faqScreen';
import Advertisements from '../Screens/Advertisements';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FAQ" component={faqScreen} />
        <Stack.Screen name="ADV" component={Advertisements} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
