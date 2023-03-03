import { StyleSheet, FlatList, Text, View } from "react-native";

const flArray = [
    {
        key: 1,
        regId: "SP21-BCS-001",
        name: "Asad"
    },
    {
        key: 2,
        regId: "SP21-BCS-002",
        name: "Haroon"
    },
    {
        key: 3,
        regId: "SP21-BCS-002",
        name: "Zahid"
    },
    {
        key: 4,
        regId: "SP21-BCS-004",
        name: "Ali"
    },
    {
        key: 5,
        regId: "SP21-BCS-005",
        name: "Faraz"
    },
    {
        key: 6,
        regId: "SP21-BCS-006",
        name: "Najam"
    },
    {
        key: 7,
        regId: "SP21-BCS-007",
        name: "Ayan"
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
})
export default MyFlatList