import React, {
  useEffect,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

import { LinearGradient }
from 'expo-linear-gradient';

export default function SplashScreen({
  navigation,
}) {

  const scaleAnim =
    new Animated.Value(0.5);

  useEffect(() => {

    Animated.spring(
      scaleAnim,
      {
        toValue: 1,

        friction: 4,

        useNativeDriver: true,
      }
    ).start();

    setTimeout(() => {

      navigation.replace(
        'Main'
      );

    }, 2500);

  }, []);

  return (

    <LinearGradient
      colors={[
        '#7B3FE4',
        '#A66CFF',
      ]}
      style={styles.container}
    >

      <Animated.View
        style={{
          transform: [
            { scale: scaleAnim },
          ],
        }}
      >

        {/* LOGO */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />

      </Animated.View>

      {/* APP NAME */}
      <Text style={styles.title}>
        StationeryHub
      </Text>

      <Text style={styles.subtitle}>
        Smart Stationery Shopping
      </Text>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  logo: {
    width: 170,

    height: 170,

    resizeMode: 'contain',
  },

  title: {
    marginTop: 25,

    fontSize: 38,

    fontWeight: 'bold',

    color: '#fff',
  },

  subtitle: {
    marginTop: 12,

    fontSize: 18,

    color: '#F3EFFF',
  },

});