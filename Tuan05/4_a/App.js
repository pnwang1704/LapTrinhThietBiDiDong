import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
  {
    id: "1",
    name: "Shop Devang",
    desc: "Ca nấu lẩu, nấu mì mini...",
    image: require("./assets/ca_nau_lau.png"),
  },
  {
    id: "2",
    name: "LTD Food",
    desc: "1KG KHÔ GÀ BƠ TỎI...",
    image: require("./assets/ga_bo_toi.png"),
  },
  {
    id: "3",
    name: "Thế giới đồ chơi",
    desc: "Xe cần cẩu đa năng",
    image: require("./assets/xa_can_cau.png"),
  },
  {
    id: "4",
    name: "Thế giới đồ chơi",
    desc: "Đồ chơi dạng mô hình",
      image: require("./assets/do_choi_dang_mo_hinh.png"),
  },
  {
    id: "5",
    name: "Minh Long Book",
    desc: "Lãnh đạo giản đơn",
    image: require("./assets/lanh_dao_gian_don.png"),
  },
  {
    id: "6",
    name: "Minh Long Book",
    desc: "Hiểu lòng con trẻ",
    image: require("./assets/xa_can_cau.png"),
  },
];

const ChatScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.info}>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.shopName}>Shop <Text style={styles.shopHighlight}>{item.name}</Text></Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Icon name="cart-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Thanh mô tả */}
      <View style={styles.topNote}>
        <Text style={styles.topNoteText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>

      {/* Danh sách shop */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem}><Icon name= "menu-sharp" size={22} /></TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}><Icon name= "home" size={22} /></TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}><Icon name= "return-up-back-sharp" size={22} /></TouchableOpacity>

      </View>


    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00aaff",
    padding: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  topNote: {
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  topNoteText: {
    fontSize: 13,
    textAlign: "left",
    color: "#333",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  desc: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
  },
  shopName: {
    fontSize: 12,
    color: "#444",
  },
  shopHighlight: {
    color: "red",
  },
  chatButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  chatText: {
    color: "#fff",
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#00aaff",
    paddingVertical: 8,
  },
  footerItem: {
    alignItems: "center",
  },
});
