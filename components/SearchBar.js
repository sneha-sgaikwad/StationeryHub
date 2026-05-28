import React, {
  useState,
} from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar({
  navigation,
}) {

  const [search, setSearch] =
    useState('');

  // SEARCH FUNCTION
  const handleSearch = () => {

    navigation.navigate(
      'Search',
      {
        searchText: search,
      }
    );

  };

  return (

    <View style={styles.container}>

      {/* SEARCH ICON */}
      <Ionicons
        name="search"
        size={22}
        color="#777"
      />

      {/* INPUT */}
      <TextInput
        placeholder="Search stationery..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
        style={styles.input}

        onSubmitEditing={
          handleSearch
        }
      />

      {/* BUTTON */}
      <TouchableOpacity
        onPress={handleSearch}
      >

        <Ionicons
          name="arrow-forward-circle"
          size={34}
          color="#7B3FE4"
        />

      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 20,

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingHorizontal: 16,

    height: 62,

    flexDirection: 'row',

    alignItems: 'center',

    elevation: 4,
  },

  input: {
    flex: 1,

    marginLeft: 12,

    fontSize: 16,

    color: '#111',
  },

});