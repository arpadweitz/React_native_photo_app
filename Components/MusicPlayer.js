// import { useState, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Audio } from 'expo-av';

// export default function MusicPlayer({ selectedMusic }) {
//   const [sound, setSound] = useState();

//   useEffect(() => {
//     return sound ? () => sound.unloadAsync() : undefined;
//   }, [sound]);

//   async function playMusic() {
//     if (selectedMusic) {
//       console.log('Loading Sound');
//       const { sound } = await Audio.Sound.createAsync({ uri: selectedMusic });
//       setSound(sound);

//       console.log('Playing Sound');
//       await sound.playAsync();
//     } else {
//       alert('Please select a music file.');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={playMusic}>
//         <Text style={styles.buttonText}>Play Music</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#282828',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
