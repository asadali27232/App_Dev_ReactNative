import { StyleSheet, FlatList, Text, View, TouchableOpacity, Alert, Image } from "react-native"
import { useState } from 'react';
import React from 'react';

function MyFlatList() {
    const [chats, setChats] = useState([
        {
            key: 0,
            name: 'Shoaib Rana',
            message: 'Hello How are you',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p1.jpg")
        },

        {
            key: 1,
            name: 'Ali',
            message: 'Where How are you',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p2.jpg")
        },

        {
            key: 2,
            name: 'Amir',
            message: 'Kahaan Ho',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p3.jpg")
        },

        {
            key: 3,
            name: 'Anam',
            message: 'Yes',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p4.jpg")
        },

        {
            key: 4,
            name: 'AMina',
            message: 'I am here',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p5.jpg")
        },

        {
            key: 5,
            name: 'Shahzaib',
            message: 'Main yahaan hun',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p1.jpg")
        },
        {
            key: 6,
            name: 'Shoaib Rana',
            message: 'Hello How are you',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p2.jpg")
        },

        {
            key: 7,
            name: 'Ali',
            message: 'Where How are you',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p3.jpg")
        },

        {
            key: 8,
            name: 'Amir',
            message: 'Kahaan Ho',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p1.jpg")
        },

        {
            key: 9,
            name: 'Anam',
            message: 'Yes',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p4.jpg")
        },

        {
            key: 10,
            name: 'AMina',
            message: 'I am here',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p1.jpg")
        },

        {
            key: 11,
            name: 'Shahzaib',
            message: 'Main yahaan hun',
            time: '8:45 am',
            unread: 2,
            imgSrc: require("./assets/p1.jpg")
        }
    ])

    const onChatPress = (item) => {
        Alert.alert(`This is ${item.name} 's Chat`)
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={chats}
                keyExtractor={(item) => { item.key }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{
                        marginBottom: 10,
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                    }} onPress={() => onChatPress(item)} >

                        <View style={{ flex: 0.2 }}>
                            <Image style={styles.logo} source={item.imgSrc} />
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <View style={{ flex: 0.5 }}>
                                <Text style={{ fontSize: 18, color: '#fff' }}>{item.name}</Text>
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Text style={{ fontSize: 13, color: '#818F97' }}>{item.message}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.2 }}>

                            <View style={{ flex: 0.5, alignItems: 'flex-end', paddingEnd: 10 }}>
                                <Text style={{ fontSize: 11, color: '#818F97' }}>{item.time}</Text>
                            </View>
                            <View style={{ flex: 0.5, alignItems: 'flex-end', paddingEnd: 10 }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: '#fff',
                                        backgroundColor: '#03A684',
                                        borderRadius: 100,
                                        height: 20,
                                        width: 20,
                                        paddingStart: 6,
                                    }}>{item.unread}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        padding: 10,
        marginBottom: 10,
    },
    listItem: {
        width: '100%',
        margin: 5,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#00a7f8",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 500,
    },
})
export default MyFlatList