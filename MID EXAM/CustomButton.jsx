import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

export default function CustomButton(props) {

useEffect(()=>{
    console.log(props.afzal)
    })
  props.loginBtnPressed=()=>{

  }

  if(props.afzal=='top'){
    return (
        <View>
          <TouchableOpacity style={{backgroundColor:'grey', width:100, height:30, alignItems:'center', justifyContent:'center'}} onPress={props.loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else  if(props.afzal=='bottom'){
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{backgroundColor:'green', width:100, height:30}} onPress={props.loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else{
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{backgroundColor:'yellow', width:100, height:30}} onPress={props.loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
