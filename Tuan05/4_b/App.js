import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
  {
    id: "1",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    rating: 4,
    reviews: 15,
    image: require("./assets/carbusbtops2 1.png"),
  },
  {
    id: "2",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    rating: 4,
    reviews: 15,
    image: require("./assets/daucam 1.png"),
  },
  {
    id: "3",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    rating: 4,
    reviews: 15,
    image: require("./assets/dauchuyendoipsps2 1.png"),
  },
  {
    id: "4",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    rating: 4,
    reviews: 15,
    image: require("./assets/daynguon 1.png"),
  },
  
  {
    id: "5",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    rating: 4,
    reviews: 15,
    image: require("./assets/dauchuyendoi 1.png"),
  },
  {
    id: "6",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    rating: 4,
    reviews: 15,
    image: require("./assets/giacchuyen 1.png"),
  },
];

const ProductScreen = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? "star" : "star-outline"}
          size={14}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={2}>
        {item.name}
      </Text>
      <View style={styles.ratingRow}>
        {renderStars(item.rating)}
        <Text style={styles.reviewText}>({item.reviews})</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={22} color="#000" />
        <TextInput
          placeholder="Dây cáp usb"
          style={styles.searchInput}
        />
        <Icon name="cart-outline" size={22} color="#000" />
        <Icon name="ellipsis-vertical" size={22} color="#000" />
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 60 }}
      />

      {/* Footer */}
     <View style={styles.footer}>
      <TouchableOpacity><Icon name= "menu-sharp" size={22} /></TouchableOpacity>
      <TouchableOpacity ><Icon name= "home" size={22} /></TouchableOpacity>
      <TouchableOpacity><Icon name= "return-up-back-sharp" size={22} /></TouchableOpacity>

      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#00aaff",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 8,
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 35,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 6,
    padding: 8,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 13,
    marginVertical: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontSize: 12,
    color: "#555",
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  price: {
    fontWeight: "bold",
    color: "#000",
    marginRight: 8,
  },
  discount: {
    color: "gray",
    fontSize: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#00aaff",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
