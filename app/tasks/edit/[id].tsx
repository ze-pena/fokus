import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";

import { useTasks } from "@/shared/context/Tasks";
import { IconSave } from "@/shared/modules/Icons";
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

import { ITask } from "@/shared/interfaces/Task";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);
  const [description, setDescription] = useState("");
  const { tasks, updateTask } = useTasks();
  const router = useRouter();

  function handleSaveTask() {
    if (!description.trim() || !currentTask) return;

    updateTask({
      ...currentTask,
      description: description.trim(),
      updatedAt: new Date(),
    });

    router.navigate("/tasks");
  }

  const searchTask = useCallback(() => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      setDescription(task.description);
      setCurrentTask(task);
    }
  }, [id, tasks]);

  useEffect(() => {
    searchTask();
  }, [searchTask]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Editar Tarefa</Text>

          <Text style={styles.label}>Descrição da tarefa:</Text>

          <TextInput
            style={styles.input}
            numberOfLines={10}
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <Pressable style={styles.button} onPress={handleSaveTask}>
            <IconSave />
            <Text>Alterar</Text>
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
