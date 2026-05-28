import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function AddressScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Saved Address 📍
      </Text>

      <View style={styles.card}>

        <Text style={styles.name}>
          Sneha Gaikwad
        </Text>

        <Text style={styles.address}>
          Nagpur, Maharashtra,
          India
        </Text>

        <Text style={styles.phone}>
          +91 9876543210
        </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
      >

        <Text style={styles.buttonText}>
          Add New Address
        </Text>

      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F5F7FB',

    padding: 20,
  },

  title: {
    fontSize: 32,

    fontWeight: 'bold',

    color: '#111',

    marginBottom: 25,
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 25,

    padding: 20,

    elevation: 5,
  },

  name: {
    fontSize: 20,

    fontWeight: 'bold',

    color: '#111',
  },

  address: {
    marginTop: 12,

    fontSize: 16,

    color: '#555',

    lineHeight: 24,
  },

  phone: {
    marginTop: 12,

    fontSize: 16,

    color: '#7B3FE4',

    fontWeight: 'bold',
  },

  button: {
    marginTop: 30,

    backgroundColor: '#7B3FE4',

    height: 60,

    borderRadius: 18,

    justifyContent: 'center',

    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',
  },

});