import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  icon?: React.ReactNode;
  title: string;
  onPress: () => void;
  isOutline?: boolean;
}

export default function Button({
  icon,
  title,
  onPress,
  isOutline = false,
}: IProps) {
  return (
    <Pressable
      style={[
        styles.button,
        isOutline ? styles.button_outline : styles.button_fill,
      ]}
      onPress={onPress}
    >
      {icon && icon}
      <Text
        style={[
          styles.text,
          isOutline ? styles.text_outline : styles.text_fill,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
  },
  button_fill: {
    backgroundColor: "#b872ff",
  },
  button_outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#b872ff",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    padding: 12,
  },
  text_fill: {
    color: "#ffffff",
  },
  text_outline: {
    color: "#b872ff",
  },
});
