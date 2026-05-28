import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  AuthContext,
} from '../context/AuthContext';

export default function ProfileScreen({
  navigation,
}) {

  const {
    user,
    logout,
  } = useContext(AuthContext);

  // IF USER NOT FOUND
  if (!user) {

    return (

      <View style={styles.center}>

        <Text style={styles.noUser}>
          No User Found
        </Text>

      </View>

    );

  }

  // FIRST LETTER
  const firstLetter =
    user.name.charAt(0).toUpperCase();

  // LOGOUT FUNCTION
  const handleLogout = () => {

    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [

        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Logout',

          onPress: () => {

            logout();

            navigation.replace(
              'Login'
            );

          },
        },

      ]
    );

  };

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>

        <Text style={styles.headerTitle}>
          My Profile
        </Text>

      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileCard}>

        {/* AVATAR */}
        <View style={styles.avatar}>

          <Text style={styles.avatarText}>
            {firstLetter}
          </Text>

        </View>

        {/* NAME */}
        <Text style={styles.name}>
          {user.name}
        </Text>

        {/* EMAIL */}
        <Text style={styles.email}>
          {user.email}
        </Text>

        {/* EDIT BUTTON */}
        <TouchableOpacity
          style={styles.editButton}
        >

          <Text style={styles.editText}>
            Edit Profile
          </Text>

        </TouchableOpacity>

      </View>

      {/* ORDERS */}
      <TouchableOpacity
        style={styles.menuCard}

        onPress={() =>
          navigation.navigate(
            'Orders'
          )
        }
      >

        <View style={styles.menuLeft}>

          <View style={styles.iconBox}>

            <Ionicons
              name="bag-handle"
              size={22}
              color="#7B3FE4"
            />

          </View>

          <Text style={styles.menuText}>
            My Orders
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

      {/* WISHLIST */}
      <TouchableOpacity
         style={styles.menuCard}

  onPress={() =>
    navigation.navigate(
      'Wishlist'
    )
  }
      >

        <View style={styles.menuLeft}>

          <View style={styles.iconBox}>

            <Ionicons
              name="heart"
              size={22}
              color="#FF4D6D"
            />

          </View>

          <Text style={styles.menuText}>
            Wishlist
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

      {/* ADDRESS */}
      <TouchableOpacity
        style={styles.menuCard}

  onPress={() =>
    navigation.navigate(
      'Address'
    )
  }
      >

        <View style={styles.menuLeft}>

          <View style={styles.iconBox}>

            <Ionicons
              name="location"
              size={22}
              color="#00B894"
            />

          </View>

          <Text style={styles.menuText}>
            Saved Address
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

      {/* SETTINGS */}
      <TouchableOpacity
       style={styles.menuCard}

  onPress={() =>
    navigation.navigate(
      'Settings'
    )
  }

  onPress={() =>
  navigation.navigate(
    'Orders'
  )
}

onPress={() =>
  navigation.navigate(
    'Wishlist'
  )
}

onPress={() =>
  navigation.navigate(
    'Address'
  )
}

onPress={() =>
  navigation.navigate(
    'Settings'
  )
}
      >

        <View style={styles.menuLeft}>

          <View style={styles.iconBox}>

            <Ionicons
              name="settings"
              size={22}
              color="#F39C12"
            />

          </View>

          <Text style={styles.menuText}>
            Settings
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logoutButton}

        onPress={handleLogout}
      >

        <Ionicons
          name="log-out-outline"
          size={24}
          color="#fff"
        />

        <Text style={styles.logoutText}>
          Logout
        </Text>

      </TouchableOpacity>

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

  center: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  noUser: {
    fontSize: 20,

    fontWeight: 'bold',
  },

  header: {
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 34,

    fontWeight: 'bold',

    color: '#111',
  },

  profileCard: {
    backgroundColor: '#fff',

    borderRadius: 30,

    padding: 25,

    alignItems: 'center',

    elevation: 5,
  },

  avatar: {
    width: 110,

    height: 110,

    borderRadius: 55,

    backgroundColor: '#7B3FE4',

    justifyContent: 'center',

    alignItems: 'center',
  },

  avatarText: {
    color: '#fff',

    fontSize: 42,

    fontWeight: 'bold',
  },

  name: {
    marginTop: 18,

    fontSize: 28,

    fontWeight: 'bold',

    color: '#111',
  },

  email: {
    marginTop: 8,

    fontSize: 16,

    color: '#777',
  },

  editButton: {
    marginTop: 20,

    backgroundColor: '#F3EEFF',

    paddingHorizontal: 28,

    paddingVertical: 12,

    borderRadius: 16,
  },

  editText: {
    color: '#7B3FE4',

    fontWeight: 'bold',

    fontSize: 16,
  },

  menuCard: {
    marginTop: 18,

    backgroundColor: '#fff',

    borderRadius: 22,

    padding: 18,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    elevation: 3,
  },

  menuLeft: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  iconBox: {
    width: 50,

    height: 50,

    borderRadius: 15,

    backgroundColor: '#F5F5F5',

    justifyContent: 'center',

    alignItems: 'center',
  },

  menuText: {
    marginLeft: 16,

    fontSize: 17,

    fontWeight: '600',

    color: '#222',
  },

  logoutButton: {
    marginTop: 35,

    backgroundColor: '#FF4D6D',

    borderRadius: 20,

    height: 60,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,
  },

  logoutText: {
    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 10,
  },

});