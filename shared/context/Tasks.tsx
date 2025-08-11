import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITask } from "../interfaces/Task";
import StorageKeys from "./StorageKeys";

interface IContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
}

const TasksContext = createContext<IContext>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

interface IProps {
  children: ReactElement;
}

export default function TasksProvider({ children }: IProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function addTask(newTask: ITask) {
    setTasks([...tasks, newTask]);
  }

  function updateTask(updatedTask: ITask) {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }

  function deleteTask(taskId: string) {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    async function getData(): Promise<ITask[]> {
      try {
        const jsonValue = await AsyncStorage.getItem(StorageKeys.TASKS);
        return jsonValue !== null ? JSON.parse(jsonValue) : [];
      } catch {
        console.error("Failed to get tasks");
        return [];
      }
    }

    async function loadTasks() {
      const tasks = await getData();
      setTasks(tasks);
      setIsLoaded(true);
    }

    loadTasks();
  }, []);

  useEffect(() => {
    async function setData(tasks: ITask[]) {
      try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem(StorageKeys.TASKS, jsonValue);
      } catch {
        console.error("Failed to set tasks");
      }
    }

    if (isLoaded) {
      setData(tasks);
    }
  }, [tasks, isLoaded]);

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }

  return context;
}
