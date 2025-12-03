import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface IProps {
  description: string;
  isCompleted: boolean;
  onToggleCheck?: () => void;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

export default function TaskItem({
  description,
  isCompleted = false,
  onToggleCheck,
  onPressEdit,
  onPressDelete,
}: IProps) {
  return (
    <View
      style={[
        styles.container,
        isCompleted ? styles.container_checked : styles.container_unchecked,
      ]}
    >
      <Pressable onPress={() => onToggleCheck?.()}>
        <Ionicons
          name="checkmark-circle-outline"
          size={24}
          color={isCompleted ? "#0F725C" : "#144480"}
        />
      </Pressable>

      <Text style={styles.text}>{description}</Text>

      <Pressable onPress={() => onPressDelete?.()}>
        <Ionicons name="trash-bin-outline" size={20} color="#df6c6cff" />
      </Pressable>

      <Pressable onPress={() => onPressEdit?.()}>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    backgroundColor: "#14448080",
    borderRadius: 8,
  },
  container_unchecked: {
    borderColor: "#144480",
  },
  container_checked: {
    borderColor: "#0F725C",
  },
  text: {
    flexGrow: 1,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
