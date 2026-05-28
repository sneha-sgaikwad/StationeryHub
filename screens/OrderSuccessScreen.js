import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OrderSuccessScreen({
  navigation,
}) {

  return (

    <View style={styles.container}>

      {/* Success Icon */}
      <View style={styles.iconContainer}>

        <Ionicons
          name="checkmark"
          size={70}
          color="#fff"
        />

      </View>

      {/* Success Text */}
      <Text style={styles.title}>
        Order Placed Successfully!
      </Text>

      <Text style={styles.subtitle}>
        Your stationery items will be
        delivered soon.
      </Text>

      {/* Order ID */}
      <View style={styles.orderBox}>

        <Text style={styles.orderText}>
          Order ID
        </Text>

        <Text style={styles.orderId}>
          #STH2026
        </Text>

      </View>

      {/* Continue Shopping */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Main')
        }
      >

        <Text style={styles.buttonText}>
          Continue Shopping
        </Text>

      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F8F8F8',

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 20,
  },

  iconContainer: {
    width: 130,

    height: 130,

    borderRadius: 70,

    backgroundColor: '#7B3FE4',

    justifyContent: 'center',

    alignItems: 'center',
  },

  title: {
    marginTop: 35,

    fontSize: 30,

    fontWeight: 'bold',

    color: '#222',

    textAlign: 'center',
  },

  subtitle: {
    marginTop: 15,

    fontSize: 17,

    color: '#666',

    textAlign: 'center',

    lineHeight: 26,
  },

  orderBox: {
    marginTop: 35,

    backgroundColor: '#fff',

    width: '100%',

    borderRadius: 20,

    padding: 20,

    alignItems: 'center',

    elevation: 4,
  },

  orderText: {
    color: '#777',

    fontSize: 16,
  },

  orderId: {
    marginTop: 10,

    fontSize: 28,

    fontWeight: 'bold',

    color: '#7B3FE4',
  },

  button: {
    marginTop: 40,

    backgroundColor: '#7B3FE4',

    width: '100%',

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