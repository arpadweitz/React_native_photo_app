import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

const PlaceholderImage = require('./assets/pic3.jpeg');
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  },[sound]);


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


  // const takePictureAsync = async () => {
  //   const cameraPermission = await ImagePicker.getCameraPermissionsAsync();
  //   if (!cameraPermission.granted) {
  //     alert('Camera permission not granted.');
  //     return;
  //   }

  //   let result = await ImagePicker.launchCameraAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     setSelectedImage(result.assets[0].uri);
  //   } else {
  //     alert('You did not take any picture.');
  //   }
  // };


  // const takePictureAsync = async () => {
  //   let result = await ImagePicker.launchCameraAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   })
  //   if (!result.canceled) {
  //     setSelectedImage(result.assets[0].uri);
  //   } else {
  //     alert('You did not take any picture');
  //   }
  // };



  const takePictureAsync = async () => {
    // Get camera permissions
    let permission = await ImagePicker.getCameraPermissionsAsync();
    console.log(permission); // Log the permissions
  
    if (permission.status === 'granted') {
      // Launch the camera
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      } else {
        alert('You did not take any picture');
      }
    } else if (permission.status === 'denied') {
      alert('Camera access denied. Please enable camera access in your device settings.');
    } else {
      alert('Camera access is not determined. Please try again later.');
    }
  };

async function addMusic() {
  console.log('Loading Sound...');
  const {sound} = await Audio.Sound.createAsync(require('./assets/guitar2.mp3'));
  setSound(sound);

  console.log('Playing Sound');
  await sound.playAsync();
}

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 25, paddingTop: 20 }}>Create your custom image!</Text>
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
        <Button theme="tertinary" label='Play music' onPress={addMusic} />

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

