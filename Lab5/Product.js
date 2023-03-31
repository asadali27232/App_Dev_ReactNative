import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Product() {
  return (
    <View style={styles.main}>
      <View style={styles.imgView}>
        <Image
          style={styles.productImg}
          source={require('./assets/product.jpg')}
        />
      </View>
      <View style={styles.productContainer}>
        <View style={styles.title}>
          <View style={styles.sec1}>
            <Text
              style={{
                color: '#000000',
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 12,
              }}>
              Hukl Burger
            </Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image
                style={styles.star}
                source={require('./assets/icons8_star_52px.png')}
              />
              <Text>4.9</Text>
            </View>
          </View>
          <View style={styles.sec2}>
            <Text
              style={{ color: '#E84846', fontWeight: 'bold', fontSize: 20 }}>
              $15.00
            </Text>
          </View>
        </View>
        <View style={styles.desc}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Detail
          </Text>
          <Text style={{ color: '#383F53', fontSize: 13 }}>
            This burger uses 1000% quality beef with sliced tomatoes, pickles,
            vegetable, union amd extra thick cheese...
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imgView: {
    alignItems: 'center',
    margin: 'auto',
    flex: 0.6,
  },
  productContainer: {
    flex: 0.4,
    flexDirection: 'column',
  },
  title: {
    flex: 0.45,
    flexDirection: 'row',
  },
  desc: {
    flex: 0.55,
  },
  productImg: {
    width: 300,
    height: 300,
  },
  sec1: {
    flex: 0.7,
  },
  sec2: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  star: {
    width: 18,
    height: 18,
    marginEnd: 10,
  },
});
export default Product;
