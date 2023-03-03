import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';


function Product() {
    return (
        <View>
            <View style={styles.imgView}>
                <Image style={styles.productImg} source={require("./assets/product.jpg")} />
            </View>
            <View style={styles.productContainer}>
                <View style={styles.sec1}>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Hukl Burger</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image style={styles.star} source={require("./assets/icons8_star_52px.png")} />
                        <Text>4.9</Text>
                    </View>
                </View>
                <View style={styles.sec2}>
                    <Text style={{ color: '#E84846', fontWeight: 'bold', fontSize: 20, }}>$15.00</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    productImg: {
        width: 300,
        height: 300,
    },
    productContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    sec1: {
        flex: 0.7,
    },
    sec2: {
        flex: 0.3,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    imgView: {
        justifyContent: 'center',
        margin: 'auto',
    },
    star: {
        width: 18,
        height: 18,
        marginEnd: 10,
    }
});
export default Product