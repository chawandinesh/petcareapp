import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  PetHomeScreen,
  PetCategoriesScreen,
  PetDetails,
  PetAddDetails,
  PetAboutUs,
  PetUpdateDetails,
} from '../screens';

const Stack = createStackNavigator();
export default function stackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={PetHomeScreen} name="PetHomeScreen" />
        <Stack.Screen
          component={PetCategoriesScreen}
          name="PetCategoriesScreen"
        />
        <Stack.Screen component={PetDetails} name="PetDetails" />
        <Stack.Screen component={PetAddDetails} name="PetAddDetails" />
        <Stack.Screen component={PetAboutUs} name="PetAboutUs" />
        <Stack.Screen component={PetUpdateDetails} name="PetUpdateDetails"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}