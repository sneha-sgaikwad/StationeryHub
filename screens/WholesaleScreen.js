import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function WholesaleScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <View style={styles.header}>

        <View>
          <Text style={styles.smallText}>
            Bulk Orders
          </Text>

          <Text style={styles.title}>
            Wholesale Hub
          </Text>
        </View>

        <TouchableOpacity style={styles.iconBox}>
          <Ionicons
            name="business"
            size={24}
            color="#2E7D32"
          />
        </TouchableOpacity>

      </View>

      {/* Banner */}
      <View style={styles.banner}>

        <View style={{ flex: 1 }}>

          <Text style={styles.offer}>
            SAVE 30%
          </Text>

          <Text style={styles.bannerTitle}>
            Wholesale Stationery
          </Text>

          <Text style={styles.bannerSubtitle}>
            Best bulk prices for schools,
            offices and shops
          </Text>

          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>
              Explore Now
            </Text>
          </TouchableOpacity>

        </View>

        <Image
          source={require('../assets/wholesale.png')}
          style={styles.bannerImage}
        />

      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>
        Wholesale Categories
      </Text>

      {/* Category Cards */}
      <View style={styles.grid}>

        <View style={styles.card}>
          <Ionicons
            name="pencil"
            size={35}
            color="#2E7D32"
          />

          <Text style={styles.cardTitle}>
            Pens & Pencils
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons
            name="book"
            size={35}
            color="#2E7D32"
          />

          <Text style={styles.cardTitle}>
            Notebooks
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons
            name="color-palette"
            size={35}
            color="#2E7D32"
          />

          <Text style={styles.cardTitle}>
            Art Supplies
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons
            name="briefcase"
            size={35}
            color="#2E7D32"
          />

          <Text style={styles.cardTitle}>
            Office Items
          </Text>
        </View>

      </View>

      {/* Special Offer */}
      <View style={styles.specialOffer}>

        <Text style={styles.specialTitle}>
          Special School Offer 🎉
        </Text>

        <Text style={styles.specialText}>
          Get extra discount on orders above ₹5000
        </Text>

      </View>

      <View style={{ height: 30 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F8F8F8',

    paddingHorizontal: 18,

    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 25,
  },

  smallText: {
    color: '#777',

    fontSize: 15,
  },

  title: {
    fontSize: 30,

    fontWeight: 'bold',

    color: '#2E7D32',

    marginTop: 5,
  },

  iconBox: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: '#E8F5E9',

    justifyContent: 'center',
    alignItems: 'center',
  },

  banner: {
    backgroundColor: '#2E7D32',

    borderRadius: 25,

    padding: 20,

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 25,
  },

  offer: {
    color: '#C8E6C9',

    fontWeight: 'bold',

    fontSize: 16,
  },

  bannerTitle: {
    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 10,
  },

  bannerSubtitle: {
    color: '#E8F5E9',

    marginTop: 10,

    lineHeight: 22,
  },

  shopButton: {
    marginTop: 18,

    backgroundColor: '#fff',

    paddingVertical: 10,

    paddingHorizontal: 18,

    borderRadius: 12,

    alignSelf: 'flex-start',
  },

  shopButtonText: {
    color: '#2E7D32',

    fontWeight: 'bold',
  },

  bannerImage: {
    width: 120,
    height: 120,

    resizeMode: 'contain',
  },

  sectionTitle: {
    fontSize: 24,

    fontWeight: 'bold',

    color: '#222',

    marginBottom: 20,
  },

  grid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

  card: {
    width: '48%',

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingVertical: 30,

    alignItems: 'center',

    marginBottom: 18,

    elevation: 4,
  },

  cardTitle: {
    marginTop: 15,

    fontWeight: '600',

    color: '#333',

    fontSize: 15,
  },

  specialOffer: {
    backgroundColor: '#E8F5E9',

    borderRadius: 20,

    padding: 20,

    marginTop: 10,
  },

  specialTitle: {
    fontSize: 20,

    fontWeight: 'bold',

    color: '#2E7D32',
  },

  specialText: {
    marginTop: 10,

    color: '#555',

    lineHeight: 22,
  },
});