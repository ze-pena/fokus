import { IAction } from "@/shared/interfaces/Action";
import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  action: IAction;
  currentAction: IAction;
  onPress: (action: IAction) => void;
}

export default function ActionButton({
  action,
  currentAction,
  onPress,
}: IProps) {
  return (
    <Pressable
      key={action.id}
      style={
        action.id === currentAction.id
          ? styles.contextButtonActive
          : styles.contextButton
      }
      onPress={() => onPress(action)}
    >
      <Text style={styles.contextButtonText}>{action.display}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contextButton: {
    backgroundColor: "transparent",
    borderRadius: 0,
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: "#ffffff",
    padding: 8,
  },
});
