import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';

import WishlistScreen from '../screens/WishlistScreen';

import BottomTabs from './BottomTabs';
import SplashScreen from '../screens/SplashScreen';

import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  return (

    <Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}
>

  <Stack.Screen
    name="Splash"
    component={SplashScreen}
  />

  <Stack.Screen
  name="Search"
  component={SearchScreen}
/>


  <Stack.Screen
    name="Main"
    component={BottomTabs}
  />

  <Stack.Screen
  name="Wishlist"
  component={WishlistScreen}
/>

<Stack.Screen
  name="Address"
  component={AddressScreen}
/>

<Stack.Screen
  name="Settings"
  component={SettingsScreen}
/>

  <Stack.Screen
  name="ProductDetails"
  component={ProductDetailsScreen}
/>

  <Stack.Screen
    name="Wishlist"
    component={WishlistScreen}
  />

  <Stack.Screen
    name="Checkout"
    component={CheckoutScreen}
  />

</Stack.Navigator>

  );
}