import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function CartScreen() {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Product Section */}
      <View style={styles.productBox}>
      <Image style={styles.productImage} source={require('./assets/Capture.PNG')}/>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.productOldPrice}>141.800 đ</Text>
          <Text style={styles.subText}>Cung cấp bởi Tiki Trading</Text>
        </View>
      </View>

      {/* Discount Code */}
      <View style={styles.discountBox}>
        <TextInput
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
          style={styles.input}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Tạm tính */}
      <View style={styles.row}>
        <Text style={styles.label}>Tạm tính</Text>
        <Text style={styles.value}>141.800 đ</Text>
      </View>

      {/* Thành tiền */}
      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Thành tiền</Text>
        <Text style={styles.totalValue}>141.800 đ</Text>
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  productBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 120,
    resizeMode: "cover",
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  productOldPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
  },
  subText: {
    fontSize: 13,
    color: "#666",
  },
  discountBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  applyText: {
    color: "#fff",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  label: {
    fontSize: 15,
    color: "#333",
  },
  value: {
    fontSize: 15,
    color: "#333",
  },
  totalRow: {
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  orderButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  orderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
