import { StyleSheet } from "react-native"
import SignUpScreen from "./Screens/SignUpScreen"
export default function App() {
    return <SignUpScreen />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
