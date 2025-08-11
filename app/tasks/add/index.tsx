import { useState } from "react";

import uuid from "react-native-uuid";

import { useTasks } from "@/shared/context/Tasks";
import { IconSave } from "@/shared/modules/Icons";
import { useRouter } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function AddTask() {
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();
  const router = useRouter();

  function handleSaveTask() {
    if (!description.trim()) return;

    addTask({
      id: uuid.v4(),
      description: description.trim(),
      createdAt: new Date(),
      updatedAt: null,
      isCompleted: false,
    });

    setDescription("");
    router.navigate("/tasks");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Adicionar Tarefa</Text>

          <Text style={styles.label}>Em que você está trabalhando?</Text>

          <TextInput
            style={styles.input}
            numberOfLines={10}
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <Pressable style={styles.button} onPress={handleSaveTask}>
            <IconSave />
            <Text>Salvar</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: "#021123",
    paddingHorizontal: 32,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 26,
  },
  inner: {
    gap: 32,
    backgroundColor: "#98A0A8",
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
  },
  input: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    minHeight: 100,
    textAlign: "left",
    textAlignVertical: "top",
  },
  button: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
