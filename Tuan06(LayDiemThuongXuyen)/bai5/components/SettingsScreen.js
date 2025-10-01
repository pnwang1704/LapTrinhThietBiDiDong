import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Thông báo</Text>
      <Switch
        value={isEnabled}
        onValueChange={() => setIsEnabled((prev) => !prev)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: { fontSize: 18, marginBottom: 10 },
});
