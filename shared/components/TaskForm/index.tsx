import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import CustomButton from "@/shared/components/CustomButton";

import uuid from "react-native-uuid";

import { ITask } from "@/shared/entities/Task";

interface IProps {
  task?: ITask;
  onSubmit: (formData: ITask) => void;
  onReset: () => void;
}

export default function TaskForm({ task, onSubmit, onReset }: IProps) {
  const isNewTask = !task?.id;
  const [description, setDescription] = useState(task?.description);

  function submitForm() {
    if (!description) return;

    const formData = {
      id: task?.id ?? uuid.v4(),
      description: description,
      createdAt: task?.createdAt ?? new Date(),
      updatedAt: task?.id ? new Date() : null,
      isCompleted: task?.id ? task?.isCompleted : false,
    };

    onSubmit(formData);
    resetForm();
  }

  function resetForm() {
    setDescription(task?.description ?? "");
    onReset();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isNewTask ? "Escreva uma nova tarefa:" : "Atualize a sua tarefa:"}
      </Text>

      <TextInput
        style={styles.input}
        numberOfLines={10}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <View style={styles.actions}>
        <CustomButton
          icon={<Ionicons name="save" size={16} color="#000000" />}
          title={isNewTask ? "Criar" : "Salvar"}
          onPress={submitForm}
        />

        <CustomButton
          icon={<Ionicons name="arrow-undo" size={18} color="#000000" />}
          title="Voltar"
          onPress={resetForm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
    padding: 24,
    borderWidth: 2,
    borderColor: "#144480",
    borderRadius: 8,
    backgroundColor: "#14448080",
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 500,
  },
  input: {
    padding: 12,
    minHeight: 125,
    color: "#ffffff",
    fontSize: 16,
    textAlign: "left",
    textAlignVertical: "top",
    borderRadius: 8,
    backgroundColor: "#144480",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
  },
});
