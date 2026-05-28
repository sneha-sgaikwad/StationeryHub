import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
 ScrollView,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  CartContext,
} from '../context/CartContext';

import {
  WishlistContext,
} from '../context/WishlistContext';

export default function ProductDetailsScreen({
  route,
  navigation,
}) {

  const { product } = route.params;

  const { addToCart } =
    useContext(CartContext);

  const { addToWishlist } =
    useContext(WishlistContext);

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* IMAGE SECTION */}
      <View style={styles.imageContainer}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            navigation.goBack()
          }
        >

          <Ionicons
            name="arrow-back"
            size={24}
            color="#222"
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() =>
            addToWishlist(product)
          }
        >

          <Ionicons
            name="heart"
            size={22}
            color="#FF4D6D"
          />

        </TouchableOpacity>

        <Image
          source={product.image}
          style={styles.image}
        />

      </View>

      {/* DETAILS */}
      <View style={styles.detailsContainer}>

        {/* TITLE */}
        <Text style={styles.title}>
          {product.title}
        </Text>

        {/* RATING */}
        <View style={styles.ratingRow}>

          <Ionicons
            name="star"
            size={18}
            color="#FFD700"
          />

          <Text style={styles.ratingText}>
            4.8 Ratings
          </Text>

          <Text style={styles.reviewText}>
            (2.4k Reviews)
          </Text>

        </View>

        {/* PRICE */}
        <View style={styles.priceRow}>

          <Text style={styles.price}>
            ₹{product.price}
          </Text>

          {product.oldPrice && (

            <Text style={styles.oldPrice}>
              ₹{product.oldPrice}
            </Text>

          )}

          <View style={styles.discountBadge}>

            <Text style={styles.discountText}>
              40% OFF
            </Text>

          </View>

        </View>

        {/* DESCRIPTION CARD */}
        <View style={styles.descriptionCard}>

          <Text style={styles.descriptionTitle}>
            Product Description
          </Text>

          <Text style={styles.description}>
            {product.description}
          </Text>

        </View>

        {/* FEATURES */}
        <View style={styles.featuresRow}>

          <View style={styles.featureBox}>

            <Ionicons
              name="shield-checkmark"
              size={28}
              color="#7B3FE4"
            />

            <Text style={styles.featureText}>
              Quality
            </Text>

          </View>

          <View style={styles.featureBox}>

            <Ionicons
              name="flash"
              size={28}
              color="#7B3FE4"
            />

            <Text style={styles.featureText}>
              Fast Delivery
            </Text>

          </View>

          <View style={styles.featureBox}>

            <Ionicons
              name="refresh"
              size={28}
              color="#7B3FE4"
            />

            <Text style={styles.featureText}>
              Easy Return
            </Text>

          </View>

        </View>

        {/* BUTTONS */}
        <View style={styles.buttonRow}>

          <TouchableOpacity
            style={styles.wishlistButton}
            onPress={() =>
              addToWishlist(product)
            }
          >

            <Ionicons
              name="heart-outline"
              size={22}
              color="#7B3FE4"
            />

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {

              addToCart(product);

              navigation.navigate('Cart');

            }}
          >

            <Ionicons
              name="cart"
              size={22}
              color="#fff"
            />

            <Text style={styles.cartText}>
              Add To Cart
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F5F7FB',
  },

  imageContainer: {
    backgroundColor: '#fff',

    borderBottomLeftRadius: 35,

    borderBottomRightRadius: 35,

    alignItems: 'center',

    paddingTop: 50,

    paddingBottom: 30,
  },

  backButton: {
    position: 'absolute',

    top: 50,

    left: 20,

    width: 42,

    height: 42,

    borderRadius: 21,

    backgroundColor: '#F5F5F5',

    justifyContent: 'center',

    alignItems: 'center',
  },

  favoriteButton: {
    position: 'absolute',

    top: 50,

    right: 20,

    width: 42,

    height: 42,

    borderRadius: 21,

    backgroundColor: '#FFF0F3',

    justifyContent: 'center',

    alignItems: 'center',
  },

  image: {
    width: 280,

    height: 280,

    resizeMode: 'contain',
  },

  detailsContainer: {
    padding: 22,
  },

  title: {
    fontSize: 28,

    fontWeight: 'bold',

    color: '#222',

    lineHeight: 38,
  },

  ratingRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 12,
  },

  ratingText: {
    marginLeft: 8,

    fontSize: 16,

    fontWeight: 'bold',

    color: '#333',
  },

  reviewText: {
    marginLeft: 10,

    color: '#888',
  },

  priceRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 20,
  },

  price: {
    fontSize: 32,

    fontWeight: 'bold',

    color: '#7B3FE4',
  },

  oldPrice: {
    marginLeft: 12,

    fontSize: 18,

    color: '#999',

    textDecorationLine: 'line-through',
  },

  discountBadge: {
    marginLeft: 15,

    backgroundColor: '#E8FFF1',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 10,
  },

  discountText: {
    color: '#1BA94C',

    fontWeight: 'bold',
  },

  descriptionCard: {
    marginTop: 28,

    backgroundColor: '#fff',

    borderRadius: 22,

    padding: 18,

    elevation: 3,
  },

  descriptionTitle: {
    fontSize: 20,

    fontWeight: 'bold',

    color: '#222',
  },

  description: {
    marginTop: 12,

    fontSize: 16,

    color: '#666',

    lineHeight: 28,
  },

  featuresRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 28,
  },

  featureBox: {
    backgroundColor: '#fff',

    width: '31%',

    borderRadius: 18,

    paddingVertical: 18,

    alignItems: 'center',

    elevation: 3,
  },

  featureText: {
    marginTop: 10,

    fontWeight: '600',

    color: '#444',
  },

  buttonRow: {
    flexDirection: 'row',

    marginTop: 35,

    marginBottom: 30,
  },

  wishlistButton: {
    width: 65,

    height: 65,

    borderRadius: 20,

    backgroundColor: '#fff',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 15,

    elevation: 4,
  },

  cartButton: {
    flex: 1,

    height: 65,

    borderRadius: 20,

    backgroundColor: '#7B3FE4',

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 4,
  },

  cartText: {
    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 10,
  },

});