import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  AuthContext,
} from '../context/AuthContext';

import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

import { products } from '../data/products';

export default function HomeScreen({
  navigation,
}) {

  // GET USER
  const { user } =
    useContext(AuthContext);

  // DEFAULT NAME
  const userName =
    user?.name || 'User';

  // FIRST LETTER
  const firstLetter =
    userName
      .charAt(0)
      .toUpperCase();

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>

        <View>

          <Text style={styles.greeting}>
            Hello 👋
          </Text>

          <Text style={styles.username}>
            {userName}
          </Text>

        </View>

        {/* PROFILE AVATAR */}
        <TouchableOpacity
          style={styles.profileButton}

          onPress={() =>
            navigation.navigate(
              'Profile'
            )
          }
        >

          <View style={styles.avatar}>

            <Text style={styles.avatarText}>
              {firstLetter}
            </Text>

          </View>

        </TouchableOpacity>

      </View>

      {/* SEARCH */}
      <SearchBar
        navigation={navigation}
      />

      {/* BANNER */}
      <View style={styles.banner}>

        <View>

          <Text style={styles.bannerTitle}>
            Back To School
          </Text>

          <Text style={styles.bannerSubtitle}>
            Flat 40% OFF
          </Text>

          <TouchableOpacity
            style={styles.shopButton}
          >

            <Text style={styles.shopText}>
              Shop Now
            </Text>

          </TouchableOpacity>

        </View>

        <Image
          source={require('../assets/banner.png')}
          style={styles.bannerImage}
        />

      </View>

      {/* CATEGORIES */}
      <View style={styles.sectionRow}>

        <Text style={styles.sectionTitle}>
          Categories
        </Text>

        <TouchableOpacity>

          <Text style={styles.viewAll}>
            View All
          </Text>

        </TouchableOpacity>

      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        <CategoryCard
          title="Pens"
          image={require('../assets/pencil.png')}
        />

        <CategoryCard
          title="Books"
          image={require('../assets/notebook.png')}
        />

        <CategoryCard
          title="Bags"
          image={require('../assets/schoolbag.png')}
        />

        <CategoryCard
          title="Colors"
          image={require('../assets/marker.png')}
        />

      </ScrollView>

      {/* PRODUCTS */}
      <View style={styles.sectionRow}>

        <Text style={styles.sectionTitle}>
          Trending Products
        </Text>

      </View>

      <View style={styles.productsContainer}>

        {products.map((item) => (

          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            navigation={navigation}
            product={item}
          />

        ))}

      </View>

      <View style={{ height: 40 }} />

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F5F7FB',

    paddingHorizontal: 18,

    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  greeting: {
    fontSize: 18,

    color: '#777',
  },

  username: {
    fontSize: 34,

    fontWeight: 'bold',

    color: '#111',

    marginTop: 5,
  },

  profileButton: {
    elevation: 5,
  },

  avatar: {
    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: '#7B3FE4',

    justifyContent: 'center',

    alignItems: 'center',
  },

  avatarText: {
    color: '#fff',

    fontSize: 26,

    fontWeight: 'bold',
  },

  banner: {
    marginTop: 25,

    backgroundColor: '#7B3FE4',

    borderRadius: 28,

    padding: 22,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  bannerTitle: {
    color: '#fff',

    fontSize: 20,

    fontWeight: '600',
  },

  bannerSubtitle: {
    marginTop: 8,

    color: '#fff',

    fontSize: 32,

    fontWeight: 'bold',
  },

  shopButton: {
    marginTop: 18,

    backgroundColor: '#fff',

    paddingHorizontal: 20,

    paddingVertical: 10,

    borderRadius: 14,

    alignSelf: 'flex-start',
  },

  shopText: {
    color: '#7B3FE4',

    fontWeight: 'bold',
  },

  bannerImage: {
    width: 110,

    height: 110,

    resizeMode: 'contain',
  },

  sectionRow: {
    marginTop: 30,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 24,

    fontWeight: 'bold',

    color: '#222',
  },

  viewAll: {
    color: '#7B3FE4',

    fontWeight: '600',
  },

  productsContainer: {
    marginTop: 18,

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

});