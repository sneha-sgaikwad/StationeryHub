import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function CategoriesScreen() {

  const categories = [

    {
      id: 1,
      title: 'Pens',
      image: require('../assets/pens.png'),
    },

    {
      id: 2,
      title: 'Pencils',
      image: require('../assets/pencil.png'),
    },

    {
      id: 3,
      title: 'Notebook',
      image: require('../assets/notebook.png'),
    },

    {
      id: 4,
      title: 'Art & Craft',
      image: require('../assets/art.png'),
    },

    {
      id: 5,
      title: 'Markers',
      image: require('../assets/pens.png'),
    },

    {
      id: 6,
      title: 'School Bag',
      image: require('../assets/notebook.png'),
    },

  ];

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <Text style={styles.header}>
        Categories
      </Text>

      {/* Grid */}
      <View style={styles.grid}>

        {categories.map((item) => (

          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.8}
          >

            <Image
              source={item.image}
              style={styles.image}
            />

            <Text style={styles.title}>
              {item.title}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <View style={{ height: 40 }} />

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
    fontSize: 30,

    fontWeight: 'bold',

    color: '#222',

    marginBottom: 25,
  },

  grid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

  card: {
    width: '47%',

    backgroundColor: '#fff',

    borderRadius: 22,

    alignItems: 'center',

    padding: 18,

    marginBottom: 18,

    elevation: 4,
  },

  image: {
    width: 90,

    height: 90,

    resizeMode: 'contain',
  },

  title: {
    marginTop: 12,

    fontSize: 16,

    fontWeight: 'bold',

    color: '#333',
  },

});