import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Appbar, Provider as PaperProvider, Title, Divider} from "react-native-paper";


export default function DetailScreen() {
    return (
        <PaperProvider>
        <Appbar.Header style={styles.band}>
      {/* <ImageBackground source={require("../assets/plan.jpg")} resizeMode="cover" style={styles.plan}/> */}
      <View style={styles.row}>
      <View style={{flex:1, alignItems: 'flex-start'}}>
            <Text style={{marginTop:10}}>HOT BAKERY{'\n'}Compiègne</Text>
            </View>
            <View style={{flex:1}}>
           <Image style={styles.logo}
              source={require("../assets/Boulanger.png")}/>

            </View>
           <View style={{flex:1, alignItems: 'flex-end'}}>
               <Text style={{marginTop:10}}>Le bonheur{'\n'}Gourmand </Text>
            
           </View>
            </View>
    </Appbar.Header>
    <View style={styles.container2} >
        <ScrollView>
        <Title style={styles.title2}>Savoir faire et Activités</Title>
        <Text style={styles.Text} >Pâtissier de métier,
Spécialiste du gâteau festif et familial,
La Romainville vous propose des recettes variées</Text>
<Divider style={{Color:"black",borderWidth:1, width:300, borderColor:"orange",marginStart:25, marginBottom:15, marginTop:10}}/>
<Title  style={styles.title2}>Mariage</Title>
      <View style={styles.row1}>
      <Image
    style={styles.img0}
    source={require('../assets/mariage-roses.png')}></Image>
    <Text style={styles.Text}> Nous proposons une large gamme de pièces montées et wedding cakes, enrichie d’une offre de cocktails sucrés et salés pour accompagner tous les grands moments d’une vie</Text>
    
      </View>
      <Divider style={{Color:"black",borderWidth:1, width:300, borderColor:"orange",marginStart:25, marginBottom:15}}/>
      <Title style={styles.title2}>anniversaire</Title>
      <View style={styles.row2}>
      <Text style={styles.Text}>Gâteau ourson personnalisé, pièce montée Reine des Neiges ou un gâteau avec photo, il y en a pour tous les goûts !.</Text>
      <Image
    style={styles.img1}
    source={require('../assets/anniversaire.png')}></Image>
      </View>
      <Divider style={{Color:"black",borderWidth:1, width:300, borderColor:"orange", marginStart:25,}}/>
      <Title  style={styles.title2}>communion</Title>
      <View style={styles.row3}>
      <Image
    style={styles.img0}
    source={require('../assets/communion.jpg')}></Image>
    <Text style={styles.Text}>Nous proposons de nombreux délicieux desserts pour célébrer un baptême ou une communion avec gourmandise ! La Romainville, </Text>
      </View>
      </ScrollView>
    </View>
        </PaperProvider>

        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
  
    },
    container2:{
        flex: 1,
        backgroundColor: "#fff",
        margin:10,
        borderColor:"black",
         borderWidth:1 ,
         borderColor:"orange", 
         borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    band: {
        flex: 0.1,
        flexDirection: "row",
        marginTop: 30,
        backgroundColor: "white",
        marginHorizontal: 10,
        // justifyContent: "center",
        // alignItems: "flex-start"
      },
      logo: {
        width: 80,
        height: 80,
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 10,
        resizeMode: "stretch",
        alignItems: "flex-start",
      },
      row: {
        flex: 1,
        flexDirection: "row",
        marginTop: 30,
      },
      img1: {
        width: 150,
        height: 150,
        marginEnd: 20
      },
      img0: {
        width: 150,
        height: 150,
        marginStart: 20
      },
      row1: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'red',
        marginBottom: 50
      },
      row2: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'green',
        marginBottom: 50
      },
      row3: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'blue'
      },
    container: {
        flex: 1,
       
        // alignItems: 'center',
      },
    
      title2:{
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      },
      Text: {
        marginStart: 10,
        marginTop: 30,
        fontSize: 15,
        lineHeight: 20,
        fontWeight: "small",
        textAlign: "center",
      },

});