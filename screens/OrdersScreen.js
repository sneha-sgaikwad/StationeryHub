import React, {
  useContext,
  useEffect,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

import {
  OrderContext,
} from '../context/OrderContext';

export default function OrdersScreen({
  route,
}) {

  const {
    orders,
    addOrder,
  } = useContext(OrderContext);

  // GET ORDER ITEMS
  const orderedItems =
    route.params?.orderedItems || [];

  // ADD ORDERS
  useEffect(() => {

    if (
      orderedItems.length > 0
    ) {

      addOrder(
        orderedItems
      );

    }

  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.header}>
        My Orders 📦
      </Text>

      {orders.length === 0 ? (

        <View style={styles.emptyContainer}>

          <Text style={styles.emptyText}>
            No Orders Yet
          </Text>

        </View>

      ) : (

        <FlatList
          data={orders}

          keyExtractor={(
            item,
            index
          ) =>
            index.toString()
          }

          renderItem={({
            item,
          }) => (

            <View style={styles.card}>

              <Image
                source={item.image}
                style={styles.image}
              />

              <View
                style={
                  styles.details
                }
              >

                <Text
                  style={
                    styles.title
                  }
                >
                  {item.title}
                </Text>

                <Text
                  style={
                    styles.price
                  }
                >
                  ₹{item.price}
                </Text>

                <Text
                  style={
                    styles.status
                  }
                >
                  Order Placed ✅
                </Text>

              </View>

            </View>

          )}
        />

      )}

    </View>

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

    color: '#111',

    marginBottom: 25,
  },

  emptyContainer: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  emptyText: {
    fontSize: 22,

    color: '#777',
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 25,

    padding: 16,

    marginBottom: 18,

    flexDirection: 'row',

    elevation: 4,
  },

  image: {
    width: 90,

    height: 90,

    resizeMode: 'contain',
  },

  details: {
    marginLeft: 15,

    justifyContent: 'center',
  },

  title: {
    fontSize: 18,

    fontWeight: 'bold',

    color: '#111',
  },

  price: {
    marginTop: 8,

    fontSize: 20,

    fontWeight: 'bold',

    color: '#7B3FE4',
  },

  status: {
    marginTop: 10,

    color: 'green',

    fontWeight: 'bold',
  },

});