import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: styles.tabBar,

        tabBarIcon: ({
          focused,
        }) => {

          let icon;

          // HOME
          if (route.name === 'Home') {

            icon =
              require('../assets/home.png');

          }

          // CATEGORIES
          else if (
            route.name === 'Categories'
          ) {

            icon =
              require('../assets/categories.png');

          }

          // CART
          else if (
            route.name === 'Cart'
          ) {

            icon =
              require('../assets/cart.png');

          }

          // ORDERS
          else if (
            route.name === 'Orders'
          ) {

            icon =
              require('../assets/orders.png');

          }

          // PROFILE
          else if (
            route.name === 'Profile'
          ) {

            icon =
              require('../assets/profile.png');

          }

          return (

            <View
              style={[
                styles.tabItem,

                focused &&
                  styles.activeTab,
              ]}
            >

             <Image
  source={icon}
  style={styles.icon}
/>

              <Text
                style={[
                  styles.label,

                  {
                    color: focused
                      ? '#fff'
                      : '#777',
                  },
                ]}
              >

                {route.name}

              </Text>

            </View>

          );

        },

      })}

    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({

  tabBar: {
    height: 80,

    backgroundColor: '#fff',

    borderTopWidth: 0,

    elevation: 10,

    paddingBottom: 10,

    paddingTop: 10,
  },

  tabItem: {
    width: 65,

    height: 65,

    borderRadius: 20,

    justifyContent: 'center',

    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#7B3FE4',
  },

  icon: {
  width: 28,
  height: 28,
  resizeMode: 'contain',
},

  label: {
    marginTop: 5,

    fontSize: 11,

    fontWeight: '600',
  },

});