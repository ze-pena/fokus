import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  title: string;
  onPress: () => void;
}

export default function CommonButton({ title, onPress }: IProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    backgroundColor: "#b872ff",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    padding: 12,
    color: "#ffffff",
  },
});
