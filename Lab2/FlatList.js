import { StyleSheet, FlatList, Text, View } from "react-native";

const flArray = [
    {
        key: 1,
        regId: "SP21-BCS-001",
        name: "Hemera"
    },
    {
        key: 2,
        regId: "SP21-BCS-002",
        name: "Amena"
    },
    {
        key: 3,
        regId: "SP21-BCS-002",
        name: "Mushaim"
    },
    {
        key: 4,
        regId: "SP21-BCS-004",
        name: "Esha"
    },
    {
        key: 5,
        regId: "SP21-BCS-005",
        name: "Nisha"
    },
    {
        key: 6,
        regId: "SP21-BCS-006",
        name: "Fiza"
    },
]

function MyFlatList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={flArray}
                keyExtractor={(item) => { item.key }}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text>{item.regId}</Text>
                        <Text>{item.name}</Text>
                    </View>
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
        // backgroundColor: "red",
        padding: 10,
    },
    listItem: {
        backgroundColor: "lightgray",
        width: '100%',
        margin: 5,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "green",
    },
})
export default MyFlatList