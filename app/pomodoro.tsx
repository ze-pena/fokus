import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { IAction } from "./shared/interfaces/Action";

import Footer from "@/shared/modules/Footer";
import Timer from "@/shared/modules/Timer";

const actionList: IAction[] = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("../assets/images/pomodoro/focus.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("../assets/images/pomodoro/pause_short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("../assets/images/pomodoro/pause_long.png"),
    display: "Pausa longa",
  },
];

export default function Index() {
  const [currentAction, setCurrentAction] = useState(actionList[0]);

  return (
    <View style={styles.container}>
      <Image source={currentAction.image} />

      <Timer
        actionList={actionList}
        currentAction={currentAction}
        onActionPress={setCurrentAction}
      />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
  },
});
