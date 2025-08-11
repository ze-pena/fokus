import { IconCheck, IconDelete, IconEdit } from "@/shared/modules/Icons";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

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
  const cardStyles: StyleProp<ViewStyle> = [styles.card];

  if (isCompleted) {
    cardStyles.push(styles.cardChecked);
  }

  return (
    <View style={cardStyles}>
      <Pressable style={styles.buttonCheck} onPress={() => onToggleCheck?.()}>
        <IconCheck />
      </Pressable>

      <Text style={styles.cardLabel}>{description}</Text>

      <Pressable style={styles.buttonEdit} onPress={() => onPressEdit?.()}>
        <IconEdit />
      </Pressable>

      <Pressable style={styles.buttonDelete} onPress={() => onPressDelete?.()}>
        <IconDelete />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    backgroundColor: "#98A0A8",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
  },
  cardChecked: {
    backgroundColor: "#0F725C",
  },
  cardLabel: {
    flexGrow: 1,
    fontSize: 18,
    color: "#021123",
    fontWeight: "bold",
  },
  buttonCheck: {
    width: 24,
    height: 24,
  },
  buttonEdit: {
    width: 24,
    height: 24,
  },
  buttonDelete: {
    width: 24,
    height: 24,
  },
});
