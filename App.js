import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


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
        <Button label="Use this photo" />
        <Button label="Take a picture" />
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



// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, View } from 'react-native';
// import ImageViewer from './Components/ImageViewer';
// import Button from './Components/Button';
// import { useState, useEffect, useRef } from 'react'; // Add useRef import
// import { Camera } from 'expo-camera';
// import * as ImagePicker from 'expo-image-picker'; // Add ImagePicker import

// const PlaceholderImage = require('./assets/pic1.jpeg');

// export default function App() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [cameraPermission, setCameraPermission] = useState(null);
//   const [showCamera, setShowCamera] = useState(false); // State to control camera visibility
//   const cameraRef = useRef(null); // Initialize cameraRef

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setCameraPermission(status === 'granted');
//     })();
//   }, []);

//   const takePhoto = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setSelectedImage(photo.uri);
//     }
//   };

//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     } else {
//       alert('You did not select any image.');
//     }
//   };

//   if (cameraPermission === null) {
//     return <View />;
//   }
//   if (!cameraPermission) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         {/* Show camera if showCamera state is true */}
//         {showCamera && (
//           <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
//             <View style={styles.buttonContainer}>
//               <Button theme="primary" label="Take a photo" onPress={takePhoto} />
//             </View>
//           </Camera>
//         )}

//         {/* ImageViewer and buttons */}
//         <View style={styles.imageContainer}>
//           <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
//         </View>
//         <View style={styles.footerContainer}>
//           <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
//           <Button label="Use this photo" />
//           {/* Show the "Take a photo" button */}
//           {!showCamera && (
//             <View style={styles.buttonContainer}>
//               <Button theme="primary" label="Take a photo" onPress={() => setShowCamera(true)} />
//             </View>
//           )}
//         </View>
//       </View>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#282828',
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//     width: '100%',
//   },
//   buttonContainer: {
//     // position:'relative',
//     bottom: 10,
//     left: 5,
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 80,
//   },
//   footerContainer: {
//     flexDirection: 'column', // Align buttons vertically
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 50,
//   },
// });