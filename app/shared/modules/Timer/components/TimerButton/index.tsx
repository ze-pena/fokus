import { Pressable, StyleSheet, Text } from "react-native";

import { IconPause, IconPlay } from "@/shared/modules/Icons";

type IconMap = "play" | "pause";

const iconMap: Record<IconMap, React.ReactNode> = {
  play: <IconPlay />,
  pause: <IconPause />,
};

interface IProps {
  title: string;
  icon: IconMap;
  onPress: () => void;
}

export default function TimerButton({ title, icon, onPress }: IProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {iconMap[icon]}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "#b872ff",
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
});
