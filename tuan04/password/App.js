import React, { useState } from "react";
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet } from "react-native";

export default function PasswordGenerator() {
  const [length, setLength] = useState("8");
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) chars += "0123456789";
    if (symbol) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    let result = "";
    for (let i = 0; i < parseInt(length); i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      {/* Password Result */}
      <View style={styles.resultBox}>
        <Text style={styles.resultText}>{password || " "}</Text>
      </View>

      {/* Password length */}
      <View style={styles.row}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />
      </View>

      {/* Options */}
      <View style={styles.row}>
        <Text style={styles.label}>Include lower case letters</Text>
        <Switch value={lower} onValueChange={setLower} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include upcase letters</Text>
        <Switch value={upper} onValueChange={setUpper} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include number</Text>
        <Switch value={number} onValueChange={setNumber} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include special symbol</Text>
        <Switch value={symbol} onValueChange={setSymbol} />
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c2c6c",
    padding: 20,
    borderRadius: 12,
    margin: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  resultBox: {
    backgroundColor: "#1b1b3a",
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    color: "#fff",
    fontSize: 14,
  },
  input: {
    backgroundColor: "#fff",
    width: 60,
    padding: 6,
    borderRadius: 4,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#5a5af1",
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
