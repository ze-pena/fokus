import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: IProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b872ff",
    borderRadius: 32,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
    padding: 8,
  },
});
