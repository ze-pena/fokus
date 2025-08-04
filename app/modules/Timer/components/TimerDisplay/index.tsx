import { StyleSheet, Text } from "react-native";

interface IProps {
  timerCount: number;
}

export default function TimerDisplay({ timerCount }: IProps) {
  const date = new Date(timerCount * 1000);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
