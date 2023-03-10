import React from "react"
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    Image,
} from "react-native"
import Navbar from "./Navbar"

const DATA = [
    {
        key: 1,
        title: "Main dishes",
        data: [
            {
                key: 2,
                rating: 4.7,
                imgSrc: require("./assets/p3.jpg"),
                name: "Mix Burger",
                price: 36,
            },
            {
                key: 3,
                rating: 4.5,
                imgSrc: require("./assets/p4.jpg"),
                name: "Sweet Burger",
                price: 24,
            },
            {
                key: 1,
                rating: 4.1,
                imgSrc: require("./assets/p2.jpg"),
                name: "Fish Shawarma",
                price: 13,
            },
            {
                key: 4,
                rating: 4.3,
                imgSrc: require("./assets/p5.jpg"),
                name: "Rustique Burger",
                price: 33,
            },
            {
                key: 5,
                rating: 4.8,
                imgSrc: require("./assets/p6.jpg"),
                name: "Imperial Burger",
                price: 29,
            },
            {
                key: 0,
                rating: 4.9,
                imgSrc: require("./assets/p1.jpg"),
                name: "Grill Shawarma",
                price: 31,
            },
        ],
    },
    {
        key: 2,
        title: "Fast Food",
        data: [
            {
                key: 2,
                rating: 4.7,
                imgSrc: require("./assets/p3.jpg"),
                name: "Mix Burger",
                price: 36,
            },
            {
                key: 3,
                rating: 4.5,
                imgSrc: require("./assets/p4.jpg"),
                name: "Sweet Burger",
                price: 24,
            },
            {
                key: 1,
                rating: 4.1,
                imgSrc: require("./assets/p2.jpg"),
                name: "Fish Shawarma",
                price: 13,
            },
            {
                key: 4,
                rating: 4.3,
                imgSrc: require("./assets/p5.jpg"),
                name: "Rustique Burger",
                price: 33,
            },
            {
                key: 5,
                rating: 4.8,
                imgSrc: require("./assets/p6.jpg"),
                name: "Imperial Burger",
                price: 29,
            },
            {
                key: 0,
                rating: 4.9,
                imgSrc: require("./assets/p1.jpg"),
                name: "Grill Shawarma",
                price: 31,
            },
        ],
    },
]

const App = () => (
    <SafeAreaView style={styles.container}>
        <View style={{ flex: 0.1 }}>
            <Navbar />
        </View>
        <View style={{ flex: 0.9 }}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                // <View>
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <View
                            style={{
                                borderColor: "#FBFCFF",
                                marginBottom: 10,
                                borderRadius: 10,
                                borderWidth: 1,
                                padding: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                flex: 1,
                                height: 250,
                                width: 180,
                                marginHorizontal: 5,
                            }}
                        >
                            <View style={{ flex: 0.2, width: "100%" }}>
                                <View
                                    style={{ flex: 0.5, flexDirection: "row" }}
                                >
                                    <View
                                        style={{
                                            flex: 0.5,
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Image
                                            style={styles.star}
                                            source={require("./assets/icons8_star_52px.png")}
                                        />
                                        <Text>{item.rating}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 0.5,
                                            flexDirection: "row",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <Image
                                            style={styles.star}
                                            source={require("./assets/favorite.png")}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Image
                                    style={styles.logo}
                                    source={item.imgSrc}
                                />
                            </View>
                            <View style={{ flex: 0.3 }}>
                                <View style={{ flex: 0.5 }}>
                                    <Text
                                        style={{
                                            color: "#000000",
                                            fontSize: 20,
                                            fontWeight: "bold",
                                            marginVertical: 5,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 0.5,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#383F53",
                                            fontSize: 14,
                                        }}
                                    >
                                        ${item.price}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                // </View>
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        marginBottom: 10,
    },
    listItem: {
        width: "100%",
        margin: 5,
        padding: 20,
        borderRadius: 10,
    },
    logo: {
        width: 120,
        height: 120,
    },
    star: {
        width: 18,
        height: 18,
        marginEnd: 10,
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
    },
})

export default App
