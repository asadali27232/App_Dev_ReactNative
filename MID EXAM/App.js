import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import CustomButton from './CustomButton';
import API from './API';

export default function App() {
  const [data, setData] = useState([]);

  const DATAs = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Grape', 'Orange', 'Strawberry'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Celery', 'Cucumber', 'Tomato'],
    },
    {
      title: 'Meats',
      data: ['Beef', 'Chicken', 'Pork'],
    },
  ];

  let DATA = [];

  const APICall = async () => {
    DATA = await API();
    setData(await API());

    console.log('data: ', data);
    console.log('DATA: ', DATA);
    console.log('DATAs: ', DATAs);
  };

  useEffect(() => {
    APICall();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ListEmptyComponent={<Text>No data available</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
