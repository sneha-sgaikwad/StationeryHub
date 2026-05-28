import React, {
  useContext,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  CartContext,
} from '../context/CartContext';

export default function CheckoutScreen({
  navigation,
}) {

  const { cartItems } =
    useContext(CartContext);

  const [address, setAddress] =
    useState('');

  const [paymentMethod, setPaymentMethod] =
    useState('Cash On Delivery');

  // TOTAL PRICE
  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  // PLACE ORDER
  const placeOrder = () => {

    if (!address) {

      Alert.alert(
        'Address Required',
        'Please enter delivery address'
      );

      return;

    }

    Alert.alert(
      'Order Successful 🎉',
      'Your stationery order has been placed successfully!'
    );

    navigation.navigate('Orders');

  };

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <Text style={styles.header}>
        Checkout 💳
      </Text>

      {/* ADDRESS */}
      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Delivery Address
        </Text>

        <TextInput
          placeholder="Enter your address"
          multiline
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />

      </View>

      {/* PAYMENT METHOD */}
      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Payment Method
        </Text>

        {/* COD */}
        <TouchableOpacity
          style={[
            styles.paymentOption,

            paymentMethod ===
              'Cash On Delivery' &&
              styles.activePayment,
          ]}
          onPress={() =>
            setPaymentMethod(
              'Cash On Delivery'
            )
          }
        >

          <Ionicons
            name="cash"
            size={24}
            color="#7B3FE4"
          />

          <Text style={styles.paymentText}>
            Cash On Delivery
          </Text>

        </TouchableOpacity>

        {/* CARD */}
        <TouchableOpacity
          style={[
            styles.paymentOption,

            paymentMethod ===
              'Card Payment' &&
              styles.activePayment,
          ]}
          onPress={() =>
            setPaymentMethod(
              'Card Payment'
            )
          }
        >

          <Ionicons
            name="card"
            size={24}
            color="#7B3FE4"
          />

          <Text style={styles.paymentText}>
            Card Payment
          </Text>

        </TouchableOpacity>

      </View>

      {/* ORDER SUMMARY */}
      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Order Summary
        </Text>

        {cartItems.map((item) => (

          <View
            key={item.id}
            style={styles.summaryRow}
          >

            <Text style={styles.summaryText}>
              {item.title} x {item.quantity}
            </Text>

            <Text style={styles.summaryPrice}>
              ₹
              {item.price *
                item.quantity}
            </Text>

          </View>

        ))}

        <View style={styles.divider} />

        <View style={styles.totalRow}>

          <Text style={styles.totalLabel}>
            Total
          </Text>

          <Text style={styles.totalPrice}>
            ₹{total}
          </Text>

        </View>

      </View>

      {/* PLACE ORDER BUTTON */}
      <TouchableOpacity
        style={styles.orderButton}
        onPress={placeOrder}
      >

        <Ionicons
          name="checkmark-circle"
          size={24}
          color="#fff"
        />

        <Text style={styles.orderText}>
          Place Order
        </Text>

      </TouchableOpacity>

      <View style={{ height: 40 }} />

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F5F7FB',

    padding: 18,
  },

  header: {
    fontSize: 32,

    fontWeight: 'bold',

    color: '#222',

    marginBottom: 25,
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 24,

    padding: 18,

    marginBottom: 20,

    elevation: 4,
  },

  sectionTitle: {
    fontSize: 20,

    fontWeight: 'bold',

    color: '#222',

    marginBottom: 18,
  },

  input: {
    backgroundColor: '#F7F7F7',

    borderRadius: 18,

    padding: 16,

    minHeight: 110,

    textAlignVertical: 'top',

    fontSize: 16,
  },

  paymentOption: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F7F7F7',

    borderRadius: 16,

    padding: 16,

    marginBottom: 14,
  },

  activePayment: {
    borderWidth: 2,

    borderColor: '#7B3FE4',

    backgroundColor: '#F3EEFF',
  },

  paymentText: {
    marginLeft: 14,

    fontSize: 17,

    fontWeight: '600',

    color: '#333',
  },

  summaryRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 14,
  },

  summaryText: {
    fontSize: 16,

    color: '#555',
  },

  summaryPrice: {
    fontSize: 16,

    fontWeight: 'bold',

    color: '#222',
  },

  divider: {
    height: 1,

    backgroundColor: '#EEE',

    marginVertical: 16,
  },

  totalRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  totalLabel: {
    fontSize: 22,

    fontWeight: 'bold',

    color: '#222',
  },

  totalPrice: {
    fontSize: 28,

    fontWeight: 'bold',

    color: '#7B3FE4',
  },

  orderButton: {
    backgroundColor: '#7B3FE4',

    height: 65,

    borderRadius: 22,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,
  },

  orderText: {
    color: '#fff',

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 10,
  },

});