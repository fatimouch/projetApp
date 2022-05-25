import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Appbar, Provider as PaperProvider, Title, Divider } from "react-native-paper";
import { Icon } from "@rneui/base";


export default function HomeScreen() {
  return (
    <PaperProvider>
      <Appbar.Header style={styles.band}>
      {/* <ImageBackground source={{uri:"https://previews.123rf.com/images/venimo/venimo1709/venimo170900017/85389033-vector-seamless-pattern-avec-des-ic%C3%B4nes-lin%C3%A9aires-et-des-illustrations-li%C3%A9es-%C3%A0-la-boulangerie-au-caf.jpg?fj=1"}} resizeMode="cover" style={{flex:1}} > */}
      <View style={styles.row}>
     
     <View style={{flex:1, alignItems: 'flex-start'}}>
     
           <Text style={{marginTop:10}}>HOT BAKERY{'\n'}Compiègne</Text>
           </View>
           <View style={{flex:1}}>
          <Image style={styles.logo}
             source={require("../assets/Boulanger.png")}/>
           </View>
          <View style={{flex:1, alignItems: 'flex-end'}}>
              <Text style={{marginTop:10,}}>Le bonheur{'\n'}Gourmand </Text>
          </View>
           </View>
      {/* </ImageBackground> */}
     
    </Appbar.Header>
    
    
      <View style={styles.container}>
      
        <View
          style={{
            flex: 1,
            borderColor: "orange",
            borderWidth: 1,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={styles.gateau}
              source={require("../assets/2.jpg")}
            />
            <View>
              <Text style={styles.Text}>
                <Title  style={styles.title}> HOT BAKERY {"\n"} </Title>
                <Divider style={{Color:"black",borderWidth:1, width:300, borderColor:"orange", marginBottom:10}}/>
                Spécialiste du gâteau festif, La HOT BAKERY propose une large
                gamme de pièces montées et wedding cakes, enrichie d’une offre
                de cocktails sucrés et salés pour accompagner tous les grands
                moments d’une vie. Le dessert constitue un moment clé de la
                réussite de votre réception. Très attendu par les invités, c’est
                aussi le moment d’immortaliser votre événement autour d’une
                pièce montée ou d’un buffet riche en saveurs. 
              </Text>
            </View>
            <Title  style={styles.title2}> Nos réalisations:</Title>
                <Divider style={{Color:"black",borderWidth:1, marginStart:25, width:300, borderColor:"orange", marginBottom:10}}/>
          </View>
         
       <View style={styles.row4}>
      <Image
    style={styles.imgProduit}
    source={require('../assets/cocktails.jpg')}></Image>

    
       <Image
    style={styles.imgProduit}
    source={require('../assets/24.jpg')}></Image>

      <Image
    style={styles.imgProduit}
    source={require('../assets/maillot.jpg')}></Image>
      </View>
    </View>
    
        </View>
        
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    width: "33.5%",
  },
  re: {
    width: "50%",
    height: 200,
  },
  gateau: {
    flex: 1,
    borderRadiusTop: 59,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"

  },
  title2:{
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  // plan:{
  //   flex: 1,
   
  // },
  rec: {
    width: "50%",
    height: 200,
  },
  row: {
    
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
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
  rover: {
    flex: 2,
    marginStart: 10,
    marginTop: 30,
    marginBottom: 30,
    marginEnd: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    resizeMode: "stretch",
  },
  logo: {
    width: 80,
    height: 80,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 10,
    resizeMode: "stretch",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  Text: {
    marginStart: 10,
    marginTop: 30,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "small",
    textAlign: "center",
  },
  imgProduit:{
    flex: 1,
  width: '100%',
  height: 170,
  marginStart: 20,
  borderRadius:10,
  },
  row4:{
    flex: 1,
    flexDirection: "row",
    // marginTop: 10,
    marginEnd:10

  }
});
