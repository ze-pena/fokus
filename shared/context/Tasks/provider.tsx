import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useReducer } from "react";

import StorageKeys from "../StorageKeys";

import { TasksAction, TasksContext, TasksState } from "./context";

const tasksReducer = (state: TasksState, action: TasksAction): TasksState => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        tasks: [...action.payload],
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id === action.payload),
      };
    case "UPDATE_LOAD":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return { ...state };
  }
};

const tasksInitialState: TasksState = {
  tasks: [],
  isLoaded: false,
};

export default function TasksProvider({ children }: React.PropsWithChildren) {
  const [{ tasks, isLoaded }, dispatch] = useReducer(
    tasksReducer,
    tasksInitialState
  );

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "UPDATE_LOAD", payload: false });

      try {
        const jsonValue = await AsyncStorage.getItem(StorageKeys.TASKS);
        const tasks = jsonValue !== null ? JSON.parse(jsonValue) : [];
        dispatch({ type: "SET_TASK", payload: tasks });
      } catch {
        console.error("Failed to get tasks");
        dispatch({ type: "SET_TASK", payload: [] });
      } finally {
        dispatch({ type: "UPDATE_LOAD", payload: true });
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function saveData() {
      try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem(StorageKeys.TASKS, jsonValue);
      } catch {
        console.error("Failed to set tasks");
      }
    }

    if (isLoaded) {
      saveData();
    }
  }, [tasks, isLoaded]);

  return (
    <TasksContext.Provider value={{ tasks, isLoaded, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}
