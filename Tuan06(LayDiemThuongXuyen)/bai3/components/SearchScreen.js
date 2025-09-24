import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Text style={styles.result}>Bạn tìm: {keyword}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  result: { marginTop: 20, fontSize: 16 },
});
