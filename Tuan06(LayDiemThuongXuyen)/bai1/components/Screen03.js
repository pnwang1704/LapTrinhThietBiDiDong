import React from 'react';
import { View, Text, Pressable, StyleSheet,Image } from 'react-native';

export default function Screen03({ route, navigation }) {
  const { product, color } = route.params;

  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
            <Image source= {require("../assets/vs_blue(1).png")}/>
            <View>
            <Text style={{textAlign:"center"}}>{product.name}</Text>
      <Text>Màu bạn chọn: <Text style={{fontWeight:"bold"}}>{color}</Text></Text>
      <Text>Cung cấp bởi: <Text style={{fontWeight:"bold"}}>Tiki Trading</Text></Text>
            <Text style={{fontWeight:"bold"}}>1.790.000 đ</Text>
            </View>
      </View>
      <View style={{justifyContent:"center", alignItems:"center"}}>
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("Screen01")}
      >
        <Text style={styles.buttonText}>XONG</Text>
      </Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1 },
  button:{ backgroundColor:"#0b6aa0", padding:15, borderRadius:8, marginTop:20, width:200, justifyContent:"center", alignItems:"center" },
  buttonText:{ color:"#fff", fontWeight:"bold" }
});
