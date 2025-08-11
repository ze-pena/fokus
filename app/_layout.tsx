import { Drawer } from "expo-router/drawer";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import TasksProvider from "@/shared/context/Tasks";

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
  const router = useRouter();

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
              title: "",
              drawerItemStyle: { display: "none" },
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="white"
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/tasks")}
                  />
                );
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
