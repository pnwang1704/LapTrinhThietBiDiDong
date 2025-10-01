import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
          <View>
                <Text style={styles.headerText}>A premium online store for sporter and their stylish choice</Text>
          </View>
          <View style={styles.anh}>
                    <Image source={require("../assets/bifour_-removebg-preview.png")}  />
          </View>
          <View style={{justifyContent:"center", alignItems:"center"}}>
                <Text style={{textAlign:"center", fontWeight:"bold", fontSize: 30, marginTop: 10}}>
                      POWER BIKE SHOP
                </Text>
                <Pressable onPress={()=> navigation.navigate("ProductScreen")} style={styles.button}>Get Started!</Pressable>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  headerText:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:17
  },
  anh:{
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: "#E941411A",
      borderRadius: 40,
      marginTop:30,
      height:400
  },
  button:{
    backgroundColor:"#E94141", 
    borderRadius: 20,
    color: "#fff", 
    alignItems:"center",
    justifyContent:"center",
    width:200,
    height:50,
    marginTop:10
  }});