import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const data = require('../data/productList.json');

export default function ProductSelect({route}) {
    const { id } = route.params;
  return (
    <View style={styles.container} >
        <View style={styles.row}>
            <Image source={{ uri: data[id].img }} style={{width: 300, height: 200}}></Image>
        </View>
        <View style={styles.row}>
            <Text style={styles.title} >{data[id].name}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description} >{data[id].desc}</Text>
        </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.txt} ></Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.txt} >{data[id].price}</Text>
                </View>
            </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    marginBottom: 20
  },
  txt: {
    fontSize: 16,
    textAlign: 'center'
  },
  row:{
      flexDirection:'row'
  },
  title:{
      fontWeight:'bold',
      fontSize: 22,
      marginBottom: 25,
      marginTop: 25 
  },
  description:{
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 80 
  }
});