import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import colors from '../theme/colors';

export default function CategoryCard({
  title,
  image,
}) {

  return (

    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
    >

      <View style={styles.imageContainer}>

        <Image
          source={image}
          style={styles.image}
        />

      </View>

      <Text style={styles.title}>
        {title}
      </Text>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  card: {
    marginRight: 18,

    alignItems: 'center',
  },

  imageContainer: {
    width: 90,

    height: 90,

    borderRadius: 24,

    backgroundColor: colors.white,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 4,
  },

  image: {
    width: 55,

    height: 55,

    resizeMode: 'contain',
  },

  title: {
    marginTop: 10,

    fontSize: 15,

    fontWeight: '600',

    color: colors.black,
  },

});