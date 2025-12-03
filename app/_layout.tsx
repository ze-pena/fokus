import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import GoBackButton from "@/shared/components/GoBackButton";

import TasksProvider from "@/shared/context/Tasks/provider";

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
  const [isFontsLoaded] = useFonts({
    "SpaceMono-Regular": require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!isFontsLoaded) return null;

  return (
    <TasksProvider>
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
            name="timer/index"
            options={{
              drawerLabel: "Cronômetro",
              title: "Cronômetro",
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
              title: "Adicionar tarefas",
              drawerItemStyle: { display: "none" },
              headerLeft: () => <GoBackButton path="/tasks" />,
              headerLeftContainerStyle: {
                paddingRight: 12,
              },
            }}
          />
          <Drawer.Screen
            name="tasks/edit/[id]"
            options={{
              title: "Editar tarefas",
              drawerItemStyle: { display: "none" },
              headerLeft: () => <GoBackButton path="/tasks" />,
              headerLeftContainerStyle: {
                paddingRight: 12,
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
