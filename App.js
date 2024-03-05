import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 30 }}>Good morning!</Text>
        <StatusBar style="auto" />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:50,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent:'flex-start'
  },
});
