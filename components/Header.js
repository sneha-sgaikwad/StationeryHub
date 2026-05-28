import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.container}>
      
      {/* Top Row */}
      <View style={styles.topRow}>
        
        {/* Left Section */}
        <View>
          <Text style={styles.greeting}>
            Hello 👋
          </Text>

          <Text style={styles.title}>
            Stationery Hub
          </Text>
        </View>

        {/* Notification Icon */}
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#7B3FE4"
          />
        </TouchableOpacity>

      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Find all your stationery needs in one place
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 16,
    color: '#777',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7B3FE4',
    marginTop: 5,
  },

  subtitle: {
    marginTop: 10,
    color: '#666',
    fontSize: 15,
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#F3EEFF',

    justifyContent: 'center',
    alignItems: 'center',
  },
});