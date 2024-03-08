import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {Alert } from 'react-native';
import * as Sharing from 'expo-sharing';


const PlaceholderImage = require('./assets/pic3.jpeg');
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const takePictureAsync = async () => {
    try {
      // Request camera permissions
      let { status } = await ImagePicker.requestCameraPermissionsAsync();
      console.log(status); // Log the permissions status
  
      if (status === 'granted') {
        // Launch the camera
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          quality: 1,
        });
  
        if (!result.cancelled) {
          setSelectedImage(result.assets[0].uri);
        } else {
          alert('You did not take any picture');
        }
      } else if (status === 'denied') {
        alert('Camera access denied. Please enable camera access in your device settings.');
      } else {
        alert('Camera access is not determined. Please try again later.');
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };
  

  // const takePictureAsync = async () => {
  //   // Request camera permissions
  //   let { status } = await ImagePicker.requestCameraPermissionsAsync();
  //   console.log(status); // Log the permissions status
  
  //   if (status === 'granted') {
  //     // Launch the camera
  //     let result = await ImagePicker.launchCameraAsync({
  //       allowsEditing: true,
  //       quality: 1,
  //     });
  
  //     if (!result.cancelled) {
  //       setSelectedImage(result.assets[0].uri);
  //     } else {
  //       alert('You did not take any picture');
  //     }
  //   } else if (status === 'denied') {
  //     alert('Camera access denied. Please enable camera access in your device settings.');
  //   } else {
  //     alert('Camera access is not determined. Please try again later.');
  //   }
  // };


  // const onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message: selectedImage, // Share the selected image URI
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     Alert.alert(error.message);
  //   }
  // };

  const onShare = async () => {
    try {
      if (!selectedImage) {
        Alert.alert('Error', 'No image selected to share.');
        return;
      }
      
      // Check if sharing is available
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Error', 'Sharing is not available on this device.');
        return;
      }
  
      // Share the selected image
      await Sharing.shareAsync(selectedImage);
  
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 25, paddingTop: 20 }}>Photo preview</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>

        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button theme="secondary" label='Take a picture' onPress={takePictureAsync} />
        <Button theme="tertinary" label='Share' onPress={onShare} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },

});

