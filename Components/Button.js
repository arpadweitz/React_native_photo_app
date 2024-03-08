import { StyleSheet, View, Pressable, Text, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#9ABFDA", borderRadius: 18 }]}>
        <TouchableOpacity
        
          style={[styles.button, { backgroundColor: "#fff" }]}
        
          onPress={onPress}
        >
          <FontAwesome
            name="folder"
            size={20}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  }  else if (theme === "secondary"){
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#9ABFDA", borderRadius: 18 }]}>
        <TouchableOpacity
        
          style={[styles.button, { backgroundColor: "#fff" }]}
        
          onPress={onPress}
        >


        <FontAwesome 
        name="camera" 
        size={20} 
        color="#25292e" 
        style={styles.buttonIcon} 
        />



          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </TouchableOpacity>
      </View>
    );

  } else if (theme === "tertinary"){
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#9ABFDA", borderRadius: 18 }]}>
        <TouchableOpacity
        
          style={[styles.button, { backgroundColor: "#fff" }]}
        
          onPress={onPress}
        >

        <FontAwesome 
        name="send" 
        size={20} 
        color="#25292e" 
        style={styles.buttonIcon} 
        />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </TouchableOpacity>
      </View>
    );

  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 60,
    marginHorizontal: 10,
    // borderColor: 'white',
    // borderRadius: 18,
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});