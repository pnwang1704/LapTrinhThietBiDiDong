import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

const data = [
  { id: "1", name: "Điện thoại", price: "5.000.000đ" },
  { id: "2", name: "Laptop", price: "15.000.000đ" },
  { id: "3", name: "Tai nghe", price: "500.000đ" },
];

export default function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() =>
              navigation.navigate("ProductDetails", { id: item.id })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "gray" },
});
