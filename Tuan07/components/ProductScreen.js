import { StyleSheet, Text, View, Image, Pressable,FlatList } from 'react-native';
export default function ProductScreen({navigation}){
  const data = [
    {
      id: 1,
      name: "Pinarello",
      price: 1800,
      image: require('../assets/bifour_-removebg-preview_blue.png'),
      image1:require('../assets/bifour_-removebg-preview.png')
    },    
    {
      id: 2,
      name: "Pinarello",
      price: 1900,
      image: require('../assets/bifour_-removebg-preview_blue.png')
    },
    {
      id: 3,
      name: "Pina Mountai",
      price: 1700,
      image: require('../assets/bitwo-removebg-preview.png')
    },
    {
      id: 4,
      name: "Pina Bike",
      price: 1500,
      image: require('../assets/bitwo-removebg-preview.png')
    },
    {
      id: 5,
      name: "Pinarello",
      price: 1800,
      image: require('../assets/bifour_-removebg-preview_blue.png')
    },    
    {
      id: 6,
      name: "Pinarello",
      price: 1900,
      image: require('../assets/bifour_-removebg-preview_blue.png')
    }

  ]

  const renderItem = ({item})=>{
    return(
      <Pressable onPress={()=>navigation.navigate ("ProductDetailScreen", {product:item})} style={{backgroundColor:"#F7BA8326", margin: 20, borderRadius:10}}>
            <Image source={item.image}/>
            <Text style={{textAlign:"center"}}>{item.name}</Text>
            <Text style={{textAlign:"center"}}>$ {item.price}</Text>
      </Pressable>
    )
  }
  return(
    <View style= {styles.container}>
        <View>
            <Text style={{color:"red", fontWeight:"bold", fontSize:23}}>The world’s Best Bike</Text>
        </View>
        <View style={styles.category}>
              <Pressable style={styles.button}>All</Pressable>
              <Pressable style={styles.button}>Roadbike</Pressable>
              <Pressable style={styles.button}>Moutain</Pressable>
        </View>
        <FlatList 
            numColumns={2}
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: '#fff',
    padding: 8,
  },
    category:{
      flexDirection:"row",
      flex:1,
      justifyContent:"space-between",
      marginTop:30
    },
    button:{
      borderColor: "red",
      borderWidth:1,
      height:20,
      width:70,
      borderRadius: 5,
      alignItems:"center"
    }
});