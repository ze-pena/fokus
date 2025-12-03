import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import TaskForm from "@/shared/components/TaskForm";

import { useTasksContext } from "@/shared/context/Tasks/context";

import { ITask } from "@/shared/entities/Task";

export default function EditTaskPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { tasks, dispatch } = useTasksContext();

  const [currentTask, setCurrentTask] = useState<null | ITask>(null);

  function submitForm(task: ITask) {
    dispatch({ type: "UPDATE_TASK", payload: task });
  }

  function resetForm() {
    router.navigate("/tasks");
  }

  useEffect(() => {
    function fetchData() {
      const task = tasks.find((task) => task.id === id);
      if (task) setCurrentTask(task);
    }

    fetchData();
  }, [id, tasks]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>O que você precisa atualizar?</Text>

      {currentTask && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <TaskForm
            task={currentTask}
            onSubmit={submitForm}
            onReset={resetForm}
          />
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: "#021123",
    paddingHorizontal: 32,
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 24,
    fontWeight: 500,
    marginTop: 40,
  },
});
