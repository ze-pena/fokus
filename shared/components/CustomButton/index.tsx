import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  isOutline?: boolean;
  icon?: React.ReactElement;
  title: string;
  onPress: () => void;
}

export default function TimerButton({
  isOutline,
  icon,
  title,
  onPress,
}: IProps) {
  return (
    <Pressable
      style={[
        styles.container,
        isOutline ? styles.container_outline : styles.container_filled,
      ]}
      onPress={onPress}
    >
      {icon && icon}
      <Text
        style={[
          styles.text,
          isOutline ? styles.text_outline : styles.text_filled,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minWidth: 125,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 32,
  },
  container_filled: {
    backgroundColor: "#b872ff",
  },
  container_outline: {
    borderWidth: 2,
    borderColor: "#b872ff",
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
  },
  text_filled: {
    color: "#021123",
  },
  text_outline: {
    color: "#b872ff",
  },
});
