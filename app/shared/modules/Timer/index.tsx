import { IAction } from "@/shared/interfaces/Action";
import { StyleSheet, View } from "react-native";

import ActionButton from "./components/ActionButton";
import ActionList from "./components/ActionList";
import TimerButton from "./components/TimerButton";
import TimerDisplay from "./components/TimerDisplay";

import { useRef, useState } from "react";

interface IProps {
  actionList: IAction[];
  currentAction: IAction;
  onActionPress: (action: IAction) => void;
}

export default function Timer({
  actionList,
  currentAction,
  onActionPress,
}: IProps) {
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [timerCount, setTimerCount] = useState<number>(
    currentAction.initialValue
  );

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRunning(false);
    }
  }

  function changeAction(action: IAction) {
    clearTimer();
    onActionPress(action);
    setTimerCount(action.initialValue);
  }

  function toggleTimer() {
    if (isRunning) {
      clearTimer();
      return;
    }

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTimerCount((state) => {
        if (state === 0) {
          clearTimer();
          return currentAction.initialValue;
        }

        return state - 1;
      });
    }, 1000);
  }
  return (
    <View style={styles.actions}>
      <ActionList actionList={actionList}>
        {(action) => (
          <ActionButton
            key={action.id}
            action={action}
            currentAction={currentAction}
            onPress={changeAction}
          />
        )}
      </ActionList>

      <TimerDisplay timerCount={timerCount} />

      <TimerButton
        title={isRunning ? "Pausar" : "Começar"}
        icon={isRunning ? "pause" : "play"}
        onPress={toggleTimer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
});
