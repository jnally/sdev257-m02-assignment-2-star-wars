/* Added for  Module 04 Assignment 2 - Star Wars Search */
/* SearchModal.js: Modal dialog that displays the submitted search term */
import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

export default function SearchModal({
  visible,
  searchText,
  onPressClose,
  transparent = true,
  onRequestClose = () => {},
}) {
  return (
    // Make modal with the search text
    <Modal
      visible={visible}
      transparent={transparent}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>You searched for: {searchText}</Text>
          <Text style={styles.modalButton} onPress={onPressClose}>
            Close
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalInner: {
    backgroundColor: 'azure',
    padding: 20,
    borderWidth: 1,
    borderColor: 'lightsteelblue',
    borderRadius: 2,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    margin: 5,
    color: 'slategrey',
  },
  modalButton: {
    fontWeight: 'bold',
    margin: 5,
    color: 'slategrey',
  },
});