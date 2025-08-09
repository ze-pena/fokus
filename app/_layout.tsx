import { Drawer } from "expo-router/drawer";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const screenOptions = {
  headerStyle: {
    backgroundColor: "#021123",
  },
  headerTintColor: "#ffffff",
  drawerStyle: {
    backgroundColor: "#021123",
  },
  drawerLabelStyle: {
    color: "#ffffff",
  },
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={screenOptions}>
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" },
            drawerLabel: "Início",
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            drawerLabel: "Timer",
            title: "Timer",
          }}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{
            drawerLabel: "Tarefas",
            title: "Tarefas",
          }}
        />
        <Drawer.Screen
          name="tasks/add/index"
          options={{
            drawerLabel: "Adicionar Tarefa",
            title: "Adicionar Tarefa",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
