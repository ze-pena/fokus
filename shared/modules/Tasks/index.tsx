import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

import TaskItem from "./components/TaskItem";

import CustomButton from "@/shared/components/CustomButton";

import { useTasksContext } from "@/shared/context/Tasks/context";

import { ITask } from "@/shared/entities/Task";

export default function Tasks() {
  const router = useRouter();
  const { tasks, dispatch } = useTasksContext();

  function handleDeleteTask(id: string) {
    dispatch({ type: "DELETE_TASK", payload: id });
  }

  function handleToggleCheck(task: ITask) {
    const taskUpdated = { ...task, isCompleted: !task.isCompleted };
    dispatch({ type: "UPDATE_TASK", payload: taskUpdated });
  }

  function handleEditTask(id: string) {
    router.navigate({ pathname: "/tasks/edit/[id]", params: { id } });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            key={item.id}
            description={item.description}
            isCompleted={item.isCompleted}
            onPressDelete={() => handleDeleteTask(item.id)}
            onToggleCheck={() => handleToggleCheck(item)}
            onPressEdit={() => handleEditTask(item.id)}
          />
        )}
      />

      <CustomButton
        isOutline
        icon={<Ionicons name="add-circle-outline" color="#b872ff" size={20} />}
        title="Nova tarefa"
        onPress={() => router.navigate("/tasks/add")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    paddingHorizontal: 32,
    paddingBottom: 32,
  },
  list: {
    gap: 16,
  },
});
