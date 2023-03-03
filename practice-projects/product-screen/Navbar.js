import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function Navbar() {
    return (
        <View style={styles.navContainer}>
            <View style={styles.sec1}>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.logo} source={require("./assets/back.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.sec2}>
                <Text style={styles.text}>Details</Text>
            </View>
            <View style={styles.sec3}>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.logo} source={require("./assets/favorite.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30,
    },
    navContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    sec1: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    sec2: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sec3: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 20,
        color: '#383F53',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FBFCFF',
        padding: 10,
        borderRadius: 10,
    },
});
export default Navbar