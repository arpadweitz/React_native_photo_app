// import { Camera } from 'expo-camera';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function Camera() {
//   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
//   const [hasPermission, setHasPermission] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const toggleCameraType = () => {
//     setCameraType(
//       cameraType === Camera.Constants.Type.back
//         ? Camera.Constants.Type.front
//         : Camera.Constants.Type.back
//     );
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={cameraType}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   camera: {
// //     flex: 1,
// //   },
// //   buttonContainer: {
// //     position: 'absolute',
// //     bottom: 20,
// //     left: 20,
// //   },
// //   button: {
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //     borderRadius: 5,
// //     padding: 10,
// //   },
// //   text: {
// //     fontSize: 20,
// //     color: 'white',
// //   },
// // });