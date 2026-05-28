import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';

export default function SettingsScreen() {

  const [notifications,
    setNotifications] =
    useState(true);

  const [darkMode,
    setDarkMode] =
    useState(false);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Settings ⚙️
      </Text>

      {/* NOTIFICATION */}
      <View style={styles.card}>

        <Text style={styles.text}>
          Notifications
        </Text>

        <Switch
          value={notifications}
          onValueChange={
            setNotifications
          }
        />

      </View>

      {/* DARK MODE */}
      <View style={styles.card}>

        <Text style={styles.text}>
          Dark Mode
        </Text>

        <Switch
          value={darkMode}
          onValueChange={
            setDarkMode
          }
        />

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F5F7FB',

    padding: 20,
  },

  title: {
    fontSize: 34,

    fontWeight: 'bold',

    color: '#111',

    marginBottom: 30,
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 20,

    padding: 20,

    marginBottom: 18,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    elevation: 4,
  },

  text: {
    fontSize: 18,

    fontWeight: '600',

    color: '#222',
  },

});