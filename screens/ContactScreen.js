import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Appbar, Provider as PaperProvider, Title, TextInput, Button  } from "react-native-paper";


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
    <View style={{ flex: 1, padding: 10 }}>
      <ScrollView>
        <Title
          style={{
            color: "black",
            textAlign: "center",
            padding: 10,
            fontWeight: "bold",
            marginTop: 15,
          }}
        >
          Contact
        </Title>
        <TextInput
          mode="outlined"
          label="Votre adresse mail"
          placeholder="jean.dupont@test.fr"
        />

        <TextInput
          mode="outlined"
          label="Objet"
          placeholder="objet"
        />

        <TextInput
          style={{ height: 200 }}
          mode="outlined"
          label="Message"
          placeholder="Décrivez votre demande et,,,,,!"
        />

        <Button
          icon="send"
          mode="contained"
          style={{ backgroundColor: "orange", marginTop: 15 }}
        >
          {" "}
          Envoyer
        </Button>

        <Title
          style={{
            color: "black",
            textAlign: "center",
            marginTop: 25,
            marginBottom: 15,
            fontWeight: "bold",
          }}
        >
          HOT BAKERY Compiègne
        </Title>
        <Text>
        Vous êtes un professionnel et souhaitez plus d'informations sur nos produits ou nos services ? 
        Contactez notre hotline par sms ou téléphone au :
 07.84.58.43.10 
        </Text>
        <Button icon="map-marker" mode="contained" style={{ marginTop: 15, backgroundColor:"orange" }}>
          {" "}
          Compiègne
        </Button>

      </ScrollView>
    </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
  
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
});