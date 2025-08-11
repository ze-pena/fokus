import { useTasks } from "@/shared/context/Tasks";
import { ITask } from "@/shared/interfaces/Task";
import Button from "@/shared/modules/Button";
import { IconAddCircle } from "@/shared/modules/Icons";
import TaskItem from "@/shared/modules/TaskItem";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tasks() {
  const router = useRouter();
  const { tasks, deleteTask, updateTask } = useTasks();

  function handleDeleteTask(id: string) {
    deleteTask(id);
  }

  function handleToggleCheck(task: ITask) {
    updateTask({ ...task, isCompleted: !task.isCompleted });
  }

  function handleEditTask(id: string) {
    router.navigate({ pathname: "/tasks/edit/[id]", params: { id } });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Página para listar tarefas</Text>

      <FlatList
        data={tasks}
        contentContainerStyle={styles.inner}
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

      <Button
        icon={<IconAddCircle />}
        title="Adicionar nova tarefa"
        isOutline
        onPress={() => router.navigate("/tasks/add")}
      />
    </SafeAreaView>
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
    fontSize: 26,
  },
  inner: {
    gap: 8,
  },
});
