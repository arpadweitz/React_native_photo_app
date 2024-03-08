import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ShareExample from './ShareExample'; // Import the ShareExample component

const CustomShareButton = ({ label, selectedImage }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <ShareExample selectedImage={selectedImage} /> {/* Render the ShareExample component */}
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffc107',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CustomShareButton;
