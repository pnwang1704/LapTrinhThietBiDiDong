import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet,Image } from 'react-native';

export default function Screen02({ route, navigation }) {
  const { product } = route.params;
  const [color, setColor] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.product}>
            <Image source= {require("../assets/vs_blue(1).png")}/>
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <Text>Chọn một màu bên dưới:</Text>
      <View style={styles.colors}>
        {["blue","red","black","#ace6ea"].map(c => (
          <Pressable 
            key={c} 
            style={[styles.colorBox,{ backgroundColor:c }]}
            onPress={() => setColor(c)}
          />
        ))}
      </View>
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("Screen03", { product, color })}
      >
        <Text style={styles.buttonText}>XONG</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", alignItems:"center" },
  colors:{  margin:20, backgroundColor:"gray", width: 350, alignItems:"center" },
  colorBox:{ width:50, height:50, margin:10 },
  button:{ backgroundColor:"#0b6aa0", padding:15, borderRadius:8, width:150,height:40, alignItems:"center", justifyContent:"center" },
  buttonText:{ color:"#fff", fontWeight:"bold" },
  product:{
    flexDirection:"row",
    backgroundColor:"fff",

  }
});
