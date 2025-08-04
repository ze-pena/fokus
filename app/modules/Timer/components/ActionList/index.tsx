import { IAction } from "@/shared/interfaces/Action";
import { StyleSheet, View } from "react-native";

interface IProps {
  actionList: IAction[];
  children: (action: IAction) => React.ReactNode;
}

export default function ActionList({ actionList, children }: IProps) {
  return (
    <View style={styles.context}>
      {actionList.map((action) => children(action))}
    </View>
  );
}

const styles = StyleSheet.create({
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
