import { StyleSheet, Text, View } from "react-native"
import HorList from "./HorList"
import Product from "./Product"
import Navbar from "./Navbar"

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Navbar />
            </View>
            <View style={styles.product}>
                <Product />
            </View>
            <View style={styles.horList}>
                <HorList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    navbar: {
        flex: 0.1,
        width: "100%",
    },
    product: {
        backgroundColor: "#FFFFFF",
        flex: 0.5,
        width: "100%",
    },
    horList: {
        flex: 0.4,
        width: "100%",
    },
})
