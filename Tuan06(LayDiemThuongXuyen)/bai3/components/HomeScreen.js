import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
  const data = [
    { id: "1", name: "Sản phẩm 1" },
    { id: "2", name: "Sản phẩm 2" },
    { id: "3", name: "Sản phẩm 3" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
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
    fontSize: 16,
  },
});
