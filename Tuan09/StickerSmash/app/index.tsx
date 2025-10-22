import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SQLiteProvider,
  useSQLiteContext,
  SQLiteDatabase,
} from "expo-sqlite";
import { Ionicons } from "@expo/vector-icons";

interface ItemEntity {
  id: number;
  done: boolean;
  value: string;
}

export default function Index() {
  return (
    <SQLiteProvider databaseName="tasks.db" onInit={migrateDbIfNeeded}>
      <Main />
    </SQLiteProvider>
  );
}

function Main() {
  const db = useSQLiteContext();
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<ItemEntity[]>([]);

  const refetchItems = useCallback(async () => {
    const data = await db.getAllAsync<ItemEntity>("SELECT * FROM items ORDER BY id DESC");
    setTasks(data);
  }, [db]);

  useEffect(() => {
    refetchItems();
  }, [refetchItems]);


  const filteredTasks = tasks.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddTask = async () => {
    if (!text.trim()) return;
    await db.runAsync("INSERT INTO items (done, value) VALUES (?, ?)", false, text.trim());
    setText("");
    await refetchItems();
  };


  const toggleTaskDone = async (id: number, done: boolean) => {
    await db.runAsync("UPDATE items SET done = ? WHERE id = ?", !done, id);
    await refetchItems();
  };


  const handleDelete = async (id: number) => {
    await db.runAsync("DELETE FROM items WHERE id = ?", id);
    await refetchItems();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.headerText}>Hi Twinkle</Text>
          <Text style={styles.subText}>Have a good day ahead!</Text>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

     
      <View style={styles.addTaskRow}>
        <TextInput
          style={styles.input}
          placeholder="Thêm công việc mới..."
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddTask}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

 
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                { backgroundColor: item.done ? "#1c9963" : "#fff" },
              ]}
              onPress={() => toggleTaskDone(item.id, item.done)}
            >
              {item.done && <Ionicons name="checkmark" color="#fff" size={18} />}
            </TouchableOpacity>
            <Text
              style={[
                styles.taskText,
                item.done && { textDecorationLine: "line-through", color: "#888" },
              ]}
            >
              {item.value}
            </Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Ionicons name="trash" size={20} color="#ff5a5f" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Chưa có công việc nào</Text>
        }
      />
    </KeyboardAvoidingView>
  );
}


async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  const { user_version } = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );
  if (user_version < DATABASE_VERSION) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        done INTEGER,
        value TEXT
      );
      PRAGMA user_version = ${DATABASE_VERSION};
    `);
  }
}

// ✅ Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  subText: {
    fontSize: 14,
    color: "#888",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
  addTaskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  addBtn: {
    backgroundColor: "#1c9963",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#1c9963",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
  },
});
