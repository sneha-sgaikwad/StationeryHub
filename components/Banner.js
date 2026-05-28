import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function Banner() {

  return (

    <View style={styles.container}>

      {/* Left Content */}
      <View style={styles.left}>

        <Text style={styles.title}>
          Back To School
        </Text>

        <Text style={styles.subtitle}>
          Up to 50% OFF
        </Text>

      </View>

      {/* Banner Image */}
      <Image
        source={require('../assets/banner.png')}
        style={styles.image}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#7B3FE4',

    borderRadius: 25,

    padding: 20,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 25,
  },

  left: {
    flex: 1,
  },

  title: {
    color: '#fff',

    fontSize: 26,

    fontWeight: 'bold',
  },

  subtitle: {
    color: '#fff',

    fontSize: 18,

    marginTop: 10,
  },

  image: {
    width: 130,

    height: 130,

    resizeMode: 'contain',
  },

});