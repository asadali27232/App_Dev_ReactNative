import { StyleSheet, Text, View } from 'react-native';
import HorList from './HorList';
import Product from './Product';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>Navbar</Text>
      </View>
      <View style={styles.product}>
        <Text>Product</Text>
      </View>
      <View style={styles.horList}>
        <Text>Horizontal List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    backgroundColor: 'ref',
    flex: 0.1
  },
  product: {
    backgroundColor: '#fff',
    flex: 0.5
  },
  horList: {
    backgroundColor: 'green',
    flex: 0.4
  }
});
