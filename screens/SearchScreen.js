import React, {
  useState,
} from 'react';

import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const products = [

  {
    id: '1',

    title: 'Reynolds Trimax Pen',

    price: 120,

    oldPrice: 160,

    description:
      'Smooth writing premium pen.',

    image: require('../assets/product1.png'),
  },

  {
    id: '2',

    title: 'Classmate Notebook',

    price: 240,

    oldPrice: 300,

    description:
      'High quality notebook.',

    image: require('../assets/product2.png'),
  },

  {
    id: '3',

    title: 'Apsara Pencil Box',

    price: 180,

    oldPrice: 250,

    description:
      'Premium pencil box for students.',

    image: require('../assets/product3.png'),
  },

  {
    id: '4',

    title: 'Camel Art Kit',

    price: 450,

    oldPrice: 600,

    description:
      'Beautiful drawing and color kit.',

    image: require('../assets/product4.png'),
  },

  {
    id: '5',

    title: 'Color Markers',

    price: 350,

    oldPrice: 450,

    description:
      'Colorful sketch markers set.',

    image: require('../assets/product5.png'),
  },

  {
    id: '6',

    title: 'School Bag',

    price: 950,

    oldPrice: 1200,

    description:
      'Stylish and durable school bag.',

    image: require('../assets/product6.png'),
  },

];

export default function SearchScreen({
  navigation,
}) {

  const [search, setSearch] =
    useState('');

  // FILTER PRODUCTS
  const filteredProducts =
    products.filter((item) =>

      item.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  return (

    <View style={styles.container}>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>

        <Ionicons
          name="search"
          size={22}
          color="#777"
        />

        <TextInput
          placeholder="Search products..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          autoFocus={true}
        />

      </View>

      {/* PRODUCTS */}
      <FlatList
        data={
          search.length > 0
            ? filteredProducts
            : products
        }

        keyExtractor={(item) =>
          item.id
        }

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={{
          paddingBottom: 40,
        }}

        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}

            onPress={() =>

              navigation.navigate(
                'ProductDetails',
                {
                  product: item,
                }
              )

            }
          >

            {/* PRODUCT IMAGE */}
            <Image
              source={item.image}
              style={styles.image}
            />

            {/* DETAILS */}
            <View style={styles.details}>

              <Text style={styles.title}>
                {item.title}
              </Text>

              <View
                style={styles.priceRow}
              >

                <Text
                  style={
                    styles.price
                  }
                >
                  ₹{item.price}
                </Text>

                <Text
                  style={
                    styles.oldPrice
                  }
                >
                  ₹{item.oldPrice}
                </Text>

              </View>

              <Text
                style={
                  styles.description
                }
              >
                {item.description}
              </Text>

              {/* ADD TO CART */}
              <TouchableOpacity
                style={
                  styles.cartButton
                }

                onPress={() =>

                  navigation.navigate(
                    'Cart',
                    {
                      product: item,
                    }
                  )

                }
              >

                <Ionicons
                  name="cart"
                  size={18}
                  color="#fff"
                />

                <Text
                  style={
                    styles.cartText
                  }
                >
                  Add To Cart
                </Text>

              </TouchableOpacity>

            </View>

          </TouchableOpacity>

        )}

        ListEmptyComponent={() => (

          <View
            style={styles.emptyBox}
          >

            <Ionicons
              name="search"
              size={80}
              color="#CCC"
            />

            <Text
              style={styles.emptyText}
            >
              No Products Found
            </Text>

          </View>

        )}
      />

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

  searchContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingHorizontal: 16,

    height: 62,

    elevation: 4,

    marginBottom: 20,
  },

  input: {
    flex: 1,

    marginLeft: 12,

    fontSize: 16,

    color: '#111',
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 24,

    padding: 14,

    marginBottom: 18,

    flexDirection: 'row',

    elevation: 4,
  },

  image: {
    width: 100,

    height: 100,

    resizeMode: 'contain',
  },

  details: {
    flex: 1,

    marginLeft: 15,
  },

  title: {
    fontSize: 18,

    fontWeight: 'bold',

    color: '#111',
  },

  priceRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 8,
  },

  price: {
    fontSize: 22,

    fontWeight: 'bold',

    color: '#7B3FE4',
  },

  oldPrice: {
    marginLeft: 10,

    fontSize: 16,

    color: '#999',

    textDecorationLine:
      'line-through',
  },

  description: {
    marginTop: 10,

    fontSize: 14,

    color: '#666',

    lineHeight: 22,
  },

  cartButton: {
    marginTop: 15,

    backgroundColor: '#7B3FE4',

    height: 45,

    borderRadius: 14,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',
  },

  cartText: {
    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

    marginLeft: 8,
  },

  emptyBox: {
    marginTop: 100,

    alignItems: 'center',
  },

  emptyText: {
    marginTop: 18,

    fontSize: 22,

    color: '#777',
  },

});           