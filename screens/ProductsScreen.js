import React from 'react';
import {View,ScrollView} from 'react-native';
import { Card, Title, Paragraph,Provider as PaperProvider } from 'react-native-paper';
import { Icon } from "@rneui/themed";

const data = require('../data/productList.json');

export default function ProductsScreen({ navigation }) {
  return (
    <PaperProvider>
      <ScrollView>

  {data.map((product, id) => {
   return(
     
        <Card style={{ borderColor: "orange", borderWidth: 1, margin: 7, marginTop: 40 }} onPress={() => { navigation.navigate('Retour', { id: id }) }}>
        <Card.Content>
        <View style={{flexDirection:'row'}}>
        <View style={{ alignItems: "flex-start",flex:1 }}>
          <Title style={{ fontWeight: "small", fontSize: 20 }}>{product.name}</Title>
          </View>
          <View style={{ width:180, height: 100 }}>
            <Card.Cover style={{ flex:1 }} source={{ uri: product.img }} />
          </View>
          </View>

          <View style={{flexDirection:'row'}}>
          <View style={{ alignItems: "flex-start",flex:1 }}>
            <Title>Prix</Title>
            <Paragraph>{product.price}</Paragraph>
          </View>
          <View style={{ alignItems: "flex-end", flex:1, marginTop: 24 }}>
            <Icon name='shopping-basket' color='black' type='fontisto'/>
          </View>
          </View>
        </Card.Content>
      </Card>
      
  )
    })}
    </ScrollView>
      </PaperProvider>

    )
  }
