import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProductCard({
  product,
  navigation,
}) {

  return (

    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate(
          'ProductDetails',
          { product }
        )
      }
    >

      {/* IMAGE */}
      <Image
        source={product.image}
        style={styles.image}
      />

      {/* TITLE */}
      <Text
        numberOfLines={2}
        style={styles.title}
      >
        {product.title}
      </Text>

      {/* PRICE */}
      <View style={styles.priceRow}>

        <Text style={styles.price}>
          ₹{product.price}
        </Text>

        <Text style={styles.oldPrice}>
          ₹{product.oldPrice}
        </Text>

      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
      >

        <Ionicons
          name="cart"
          size={18}
          color="#fff"
        />

      </TouchableOpacity>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  card: {
    width: '47%',

    backgroundColor: '#fff',

    borderRadius: 24,

    padding: 15,

    marginBottom: 18,

    elevation: 4,
  },

  image: {
    width: '100%',

    height: 120,

    resizeMode: 'contain',
  },

  title: {
    marginTop: 10,

    fontSize: 16,

    fontWeight: 'bold',

    color: '#222',

    minHeight: 45,
  },

  priceRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 10,
  },

  price: {
    fontSize: 24,

    fontWeight: 'bold',

    color: '#7B3FE4',
  },

  oldPrice: {
    marginLeft: 8,

    color: '#999',

    textDecorationLine: 'line-through',
  },

  button: {
    marginTop: 14,

    backgroundColor: '#7B3FE4',

    width: 45,

    height: 45,

    borderRadius: 22,

    justifyContent: 'center',

    alignItems: 'center',

    alignSelf: 'flex-end',
  },

});