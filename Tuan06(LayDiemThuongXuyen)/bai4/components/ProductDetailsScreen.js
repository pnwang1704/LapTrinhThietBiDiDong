import React from "react";
import { View, Text, StyleSheet } from "react-native";

const data = [
  { id: "1", name: "Điện thoại", price: "5.000.000đ", desc: "Điện thoại thông minh màn hình 6.5 inch" },
  { id: "2", name: "Laptop", price: "15.000.000đ", desc: "Laptop cấu hình mạnh cho công việc và giải trí" },
  { id: "3", name: "Tai nghe", price: "500.000đ", desc: "Tai nghe không dây, âm thanh sống động" },
];

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const product = data.find((p) => p.id === id);

  if (!product) return <Text>Không tìm thấy sản phẩm</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.desc}>{product.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  price: { fontSize: 16, color: "tomato", marginBottom: 10 },
  desc: { fontSize: 14 },
});
