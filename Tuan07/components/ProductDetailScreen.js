import { StyleSheet, Text, View, Image, Pressable,FlatList } from 'react-native';
export default function ProductDetailScreen({route}){
    const {product} = route.params;
    
  return(
    <View style={styles.container}>
        <View>
          <View style={styles.anh}><Image source={product.image1}/></View>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: '#fff',
    padding: 8,
  },
anh:{
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: "#E941411A",
      borderRadius: 40,
      marginTop:30,
      height:400,
      width:300
  },
 
});