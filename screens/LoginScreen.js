import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

import {
  AuthContext,
} from '../context/AuthContext';

export default function LoginScreen({
  navigation,
}) {

  const {
    login,
  } = useContext(AuthContext);

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  // LOGIN FUNCTION
  const handleLogin = () => {

    // EMPTY CHECK
    if (
      !name ||
      !email
    ) {

      Alert.alert(
        'Error',
        'Please enter all details'
      );

      return;
    }

    // GMAIL VALIDATION
    const gmailRegex =
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (
      !gmailRegex.test(email)
    ) {

      Alert.alert(
        'Invalid Email',
        'Only @gmail.com emails allowed'
      );

      return;
    }

    // LOGIN
    login(name, email);

    navigation.replace(
      'Main'
    );

  };

  return (

    <ScrollView
      contentContainerStyle={
        styles.container
      }
      showsVerticalScrollIndicator={
        false
      }
    >

      {/* LOGO */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      {/* TITLE */}
      <Text style={styles.title}>
        Stationery Hub
      </Text>

      <Text style={styles.subtitle}>
        Login To Continue
      </Text>

      {/* NAME INPUT */}
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* EMAIL INPUT */}
      <TextInput
        placeholder="Enter Gmail"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* LOGIN BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >

        <Text style={styles.buttonText}>
          Login
        </Text>

      </TouchableOpacity>

      {/* FOOTER */}
      <Text style={styles.footer}>
        Welcome to the best
        stationery shopping app ✨
      </Text>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,

    justifyContent: 'center',

    paddingHorizontal: 25,

    backgroundColor: '#F5F7FB',
  },

  logo: {
    width: 140,

    height: 140,

    resizeMode: 'contain',

    alignSelf: 'center',

    marginBottom: 20,
  },

  title: {
    fontSize: 38,

    fontWeight: 'bold',

    color: '#7B3FE4',

    textAlign: 'center',
  },

  subtitle: {
    marginTop: 10,

    fontSize: 18,

    color: '#777',

    textAlign: 'center',

    marginBottom: 40,
  },

  input: {
    backgroundColor: '#fff',

    height: 60,

    borderRadius: 18,

    paddingHorizontal: 18,

    marginBottom: 18,

    fontSize: 16,

    elevation: 4,

    color: '#111',
  },

  button: {
    backgroundColor: '#7B3FE4',

    height: 60,

    borderRadius: 18,

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 10,

    elevation: 5,
  },

  buttonText: {
    color: '#fff',

    fontSize: 20,

    fontWeight: 'bold',
  },

  footer: {
    marginTop: 35,

    textAlign: 'center',

    color: '#777',

    fontSize: 15,

    lineHeight: 24,
  },

});