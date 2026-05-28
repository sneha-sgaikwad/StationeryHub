import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Join Stationery Hub today
      </Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.replace('Main')}
      >

        <Text style={styles.signupButtonText}>
          Sign Up
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.loginText}>
          Already have an account? Login
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',

    paddingHorizontal: 25,

    backgroundColor: '#fff',
  },

  logo: {
    width: 130,
    height: 130,

    resizeMode: 'contain',

    alignSelf: 'center',

    marginBottom: 20,
  },

  title: {
    fontSize: 32,

    fontWeight: 'bold',

    textAlign: 'center',

    color: '#222',
  },

  subtitle: {
    textAlign: 'center',

    color: '#777',

    marginTop: 10,

    marginBottom: 35,
  },

  input: {
    backgroundColor: '#F3EEFF',

    borderRadius: 15,

    paddingHorizontal: 18,

    height: 55,

    marginBottom: 18,

    fontSize: 16,
  },

  signupButton: {
    backgroundColor: '#7B3FE4',

    height: 55,

    borderRadius: 15,

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 10,
  },

  signupButtonText: {
    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',
  },

  loginText: {
    marginTop: 25,

    textAlign: 'center',

    color: '#7B3FE4',

    fontWeight: '600',
  },
});