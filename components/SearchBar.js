/* Added for  Module 04 Assignment 2 - Star Wars Search */
/* SearchBar.js: Reusable search input box and modal trigger */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchModal from './SearchModal';

export default function SearchBar() {
  // Store search text and modal visibility
  const [submittedText, setSubmittedText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search..."
        returnKeyType="search"
        onSubmitEditing={(e) => {
          setSubmittedText(e.nativeEvent.text);
          setModalVisible(true);
        }}
      />
      <SearchModal
        visible={modalVisible}
        searchText={submittedText}
        onPressClose={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightsteelblue',
    borderRadius: 4,
  },
});