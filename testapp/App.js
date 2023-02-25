import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("./assets/bgHD.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingBottom: 100,
  },
  logoContainer: {
    flex: 0.4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 0.45,
    width: "100%",
  },
  buttonContainer: {
    flex: 0.15,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    height: 50,
    marginHorizontal: 22,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "#00a7f8",
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00a7f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    marginBottom: 16,
    borderRadius: 15,
    marginHorizontal: 22,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
  },
});