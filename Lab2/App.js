import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";
import FlatList from "./FlatList";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.whatsapp}>WhatsApp</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.activeTab}><Text style={styles.tabFont}>Chats</Text></View>
          <View style={styles.tabs}><Text style={styles.tabFont}>Status</Text></View>
          <View style={styles.tabs}><Text style={styles.tabFont}>Calls</Text></View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <FlatList />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121B22',
    flex: 1,
    width: "100%",
  },
  logoContainer: {
    backgroundColor: '#1F2C34',
    paddingHorizontal: 10,
    flex: 0.13,
    width: "100%",
    justifyContent: 'center',
    paddingTop: 30
  },
  inputContainer: {
    paddingTop: 10,
    flex: 0.9,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  whatsapp: {
    fontSize: 20,
    color: "#fff",
    marginTop: 16
  },
  tabs: {
    flex: 0.33,
    fontSize: 10,
    color: 'white',
    alignItems: 'center',
    marginTop: 30
  },
  activeTab: {
    flex: 0.33,
    alignItems: 'center',
    marginTop: 30,
    borderBottomWidth: 5,
    borderBottomColor: '#03A684'
  },
  tabFont: {
    fontSize: 16,
    color: 'white',
  }
});