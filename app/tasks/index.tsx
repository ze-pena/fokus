import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Tasks from "@/shared/modules/Tasks";

export default function TasksPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Itens pendentes</Text>
      <Tasks />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: "#021123",
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 24,
    fontWeight: 500,
  },
});
