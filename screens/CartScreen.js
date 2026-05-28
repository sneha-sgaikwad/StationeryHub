import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  OrderContext,
} from '../context/OrderContext';

export default function CartScreen({
  navigation,
}) {

  // ORDER CONTEXT
  const {
    addOrder,
  } = useContext(OrderContext);

  // CART ITEMS
  const [cartItems, setCartItems] =
    useState([

      {
        id: '1',
        title: 'Reynolds Trimax Pen',
        price: 120,
        quantity: 1,
        image: require('../assets/product1.png'),
      },

      {
        id: '2',
        title: 'Classmate Notebook',
        price: 240,
        quantity: 2,
        image: require('../assets/product2.png'),
      },

    ]);

  // INCREASE QUANTITY
  const increaseQty = (id) => {

    const updated =
      cartItems.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity:
              item.quantity + 1,
          };

        }

        return item;

      });

    setCartItems(updated);

  };

  // DECREASE QUANTITY
  const decreaseQty = (id) => {

    const updated =
      cartItems.map((item) => {

        if (
          item.id === id &&
          item.quantity > 1
        ) {

          return {
            ...item,
            quantity:
              item.quantity - 1,
          };

        }

        return item;

      });

    setCartItems(updated);

  };

  // REMOVE ITEM
  const removeItem = (id) => {

    const updated =
      cartItems.filter(
        (item) =>
          item.id !== id
      );

    setCartItems(updated);

  };

  // TOTAL PRICE
  const total = cartItems.reduce(
    (sum, item) =>

      sum +
      item.price *
        item.quantity,

    0
  );

  // CHECKOUT FUNCTION
  const handleCheckout = () => {

    // EMPTY CART
    if (
      cartItems.length === 0
    ) {

      Alert.alert(
        'Cart Empty',
        'Please add products'
      );

      return;
    }

    // ADD ORDER
    addOrder(cartItems);

    // SUCCESS ALERT
    Alert.alert(
      'Success ✅',
      'Order Placed Successfully',
      [

        {
          text: 'OK',

          onPress: () => {

            // CLEAR CART
            setCartItems([]);

            // OPEN ORDERS
            navigation.navigate(
              'Orders'
            );

          },
        },

      ]
    );

  };

  // EMPTY CART UI
  if (cartItems.length === 0) {

    return (

      <View style={styles.emptyContainer}>

        <Ionicons
          name="cart-outline"
          size={120}
          color="#7B3FE4"
        />

        <Text style={styles.emptyTitle}>
          Your Cart is Empty
        </Text>

        <Text style={styles.emptySubtitle}>
          Add products to continue shopping
        </Text>

        <TouchableOpacity
          style={styles.shopButton}

          onPress={() =>
            navigation.navigate(
              'Home'
            )
          }
        >

          <Text style={styles.shopText}>
            Continue Shopping
          </Text>

        </TouchableOpacity>

      </View>

    );

  }

  return (

    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>
        My Cart
      </Text>

      {/* CART PRODUCTS */}
      <FlatList
        data={cartItems}

        keyExtractor={(item) =>
          item.id
        }

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={{
          paddingBottom: 180,
        }}

        renderItem={({ item }) => (

          <View style={styles.card}>

            {/* IMAGE */}
            <Image
              source={item.image}
              style={styles.image}
            />

            {/* DETAILS */}
            <View style={styles.details}>

              <Text style={styles.title}>
                {item.title}
              </Text>

              <Text style={styles.price}>
                ₹{item.price}
              </Text>

              {/* QUANTITY */}
              <View
                style={
                  styles.quantityRow
                }
              >

                {/* MINUS */}
                <TouchableOpacity
                  style={
                    styles.qtyButton
                  }

                  onPress={() =>
                    decreaseQty(
                      item.id
                    )
                  }
                >

                  <Ionicons
                    name="remove"
                    size={18}
                    color="#7B3FE4"
                  />

                </TouchableOpacity>

                <Text
                  style={
                    styles.qtyText
                  }
                >
                  {item.quantity}
                </Text>

                {/* PLUS */}
                <TouchableOpacity
                  style={
                    styles.qtyButton
                  }

                  onPress={() =>
                    increaseQty(
                      item.id
                    )
                  }
                >

                  <Ionicons
                    name="add"
                    size={18}
                    color="#7B3FE4"
                  />

                </TouchableOpacity>

              </View>

            </View>

            {/* DELETE */}
            <TouchableOpacity
              onPress={() =>
                removeItem(item.id)
              }
            >

              <Ionicons
                name="trash"
                size={24}
                color="red"
              />

            </TouchableOpacity>

          </View>

        )}
      />

      {/* BOTTOM CHECKOUT */}
      <View style={styles.bottomBox}>

        <View>

          <Text style={styles.totalLabel}>
            Total Price
          </Text>

          <Text style={styles.total}>
            ₹{total}
          </Text>

        </View>

        {/* CHECKOUT BUTTON */}
        <TouchableOpacity
          style={styles.checkoutButton}

          onPress={handleCheckout}
        >

          <Text
            style={
              styles.checkoutText
            }
          >
            Checkout
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F5F7FB',

    paddingHorizontal: 16,

    paddingTop: 20,
  },

  header: {
    fontSize: 36,

    fontWeight: 'bold',

    color: '#111',

    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',

    backgroundColor: '#fff',

    borderRadius: 24,

    padding: 14,

    marginBottom: 18,

    elevation: 4,

    alignItems: 'center',
  },

  image: {
    width: 90,

    height: 90,

    resizeMode: 'contain',
  },

  details: {
    flex: 1,

    marginLeft: 15,
  },

  title: {
    fontSize: 17,

    fontWeight: 'bold',

    color: '#222',
  },

  price: {
    marginTop: 8,

    fontSize: 22,

    fontWeight: 'bold',

    color: '#7B3FE4',
  },

  quantityRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 14,
  },

  qtyButton: {
    width: 34,

    height: 34,

    borderRadius: 10,

    backgroundColor: '#F3EEFF',

    justifyContent: 'center',

    alignItems: 'center',
  },

  qtyText: {
    marginHorizontal: 14,

    fontSize: 18,

    fontWeight: 'bold',
  },

  bottomBox: {
    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: '#fff',

    padding: 20,

    borderTopLeftRadius: 28,

    borderTopRightRadius: 28,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    elevation: 15,
  },

  totalLabel: {
    color: '#777',

    fontSize: 15,
  },

  total: {
    marginTop: 5,

    fontSize: 28,

    fontWeight: 'bold',

    color: '#111',
  },

  checkoutButton: {
    backgroundColor: '#7B3FE4',

    paddingHorizontal: 30,

    paddingVertical: 16,

    borderRadius: 18,
  },

  checkoutText: {
    color: '#fff',

    fontSize: 17,

    fontWeight: 'bold',
  },

  emptyContainer: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#F5F7FB',

    paddingHorizontal: 30,
  },

  emptyTitle: {
    marginTop: 20,

    fontSize: 28,

    fontWeight: 'bold',

    color: '#222',
  },

  emptySubtitle: {
    marginTop: 10,

    fontSize: 16,

    color: '#777',

    textAlign: 'center',
  },

  shopButton: {
    marginTop: 30,

    backgroundColor: '#7B3FE4',

    paddingHorizontal: 35,

    paddingVertical: 16,

    borderRadius: 18,
  },

  shopText: {
    color: '#fff',

    fontSize: 17,

    fontWeight: 'bold',
  },

});