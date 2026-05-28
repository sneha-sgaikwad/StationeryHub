import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  CartProvider,
} from './context/CartContext';

import {
  OrderProvider,
} from './context/OrderContext';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  AuthProvider,
} from './context/AuthContext';

import BottomTabs from './navigation/BottomTabs';

import LoginScreen from './screens/LoginScreen';

import ProductDetailsScreen from './screens/ProductDetailsScreen';

import WishlistScreen from './screens/WishlistScreen';

import AddressScreen from './screens/AddressScreen';

import SettingsScreen from './screens/SettingsScreen';

import OrdersScreen from './screens/OrdersScreen';

const Stack =
  createNativeStackNavigator();

export default function App() {

  return (

    <AuthProvider>

      <CartProvider>

  <OrderProvider>


      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >

          {/* LOGIN */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />

          {/* BOTTOM TABS */}
          <Stack.Screen
            name="Main"
            component={BottomTabs}
          />

          {/* PRODUCT DETAILS */}
          <Stack.Screen
            name="ProductDetails"
            component={
              ProductDetailsScreen
            }
          />

          {/* WISHLIST */}
          <Stack.Screen
            name="Wishlist"
            component={WishlistScreen}
          />

          {/* ADDRESS */}
          <Stack.Screen
            name="Address"
            component={AddressScreen}
          />

          {/* SETTINGS */}
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
          />

          {/* ORDERS */}
          <Stack.Screen
            name="Orders"
            component={OrdersScreen}
          />

        </Stack.Navigator>

      </NavigationContainer>

       </OrderProvider>

       </CartProvider>

    </AuthProvider>


  );
}