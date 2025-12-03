import TaskForm from "@/shared/components/TaskForm";
import { useRouter } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import { ITask } from "@/shared/entities/Task";

import { useTasksContext } from "@/shared/context/Tasks/context";

export default function AddTaskPage() {
  const router = useRouter();
  const { dispatch } = useTasksContext();

  function submitForm(task: ITask) {
    dispatch({ type: "ADD_TASK", payload: task });
  }

  function resetForm() {
    router.navigate("/tasks");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Em que você está trabalhando?</Text>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <TaskForm onSubmit={submitForm} onReset={resetForm} />
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
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 24,
    fontWeight: 500,
    marginTop: 40,
  },
});
