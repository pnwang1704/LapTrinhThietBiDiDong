import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

export default function Screen01({ navigation }) {
  const product = {
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    price: "1.790.000 đ",
    image: require('../assets/vs_blue.png'),
    imageStar: require('../assets/star.png')
  };

  return (
    <View style={styles.container}>
      <Image source={product.image}/>
      <Text>{product.name}</Text>
            <View style={styles.rate}>
            <Image source={product.imageStar}/>
             <Image source={product.imageStar}/>
              <Image source={product.imageStar}/>
               <Image source={product.imageStar}/>
                <Image source={product.imageStar}/>
              <Text style={{marginLeft:30, marginTop:3}}> (Xem 828 đánh giá)</Text>
      </View>
      <Text style={{fontWeight:"bold", marginRight:170, fontSize:15}}>{product.price}</Text>
      <Text style={{color:"red", fontWeight:"bold",  marginRight:100}}>Ở đâu rẻ hơn hoàn tiền</Text>
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("Screen02", { product })}
      >
        <Text style={styles.buttonText}>4 MÀU-CHỌN MÀU</Text>
      </Pressable>
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("Screen02", { product })}
      >
        <Text style={styles.buttonText}>CHỌN MUA</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", alignItems:"center" },
  button:{ backgroundColor:"red", padding:15, borderRadius:8, margin:5 },
  buttonText:{ color:"#fff", fontWeight:"bold" },
  rate:{
    flexDirection:"row",
  }
});
