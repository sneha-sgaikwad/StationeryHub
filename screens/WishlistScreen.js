import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function WishlistScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Wishlist ❤️
      </Text>

      <Text style={styles.subtitle}>
        Your favourite products will appear here.
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#F5F7FB',
  },

  title: {
    fontSize: 34,

    fontWeight: 'bold',

    color: '#111',
  },

  subtitle: {
    marginTop: 10,

    fontSize: 16,

    color: '#777',
  },

});