import { createContext, useContext } from "react";

import { ITask } from "@/shared/entities/Task";

export interface TasksState {
  tasks: ITask[];
  isLoaded: boolean;
}

export type TasksAction =
  | { type: "SET_TASK"; payload: ITask[] }
  | { type: "ADD_TASK"; payload: ITask }
  | { type: "UPDATE_TASK"; payload: ITask }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "UPDATE_LOAD"; payload: boolean };

export interface IContext {
  tasks: ITask[];
  isLoaded: boolean;
  dispatch: React.ActionDispatch<[action: TasksAction]>;
}

export const TasksContext = createContext<IContext>({
  tasks: [],
  isLoaded: false,
  dispatch: () => {},
});

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    const errorMessage = "useTasks must be used within a TasksProvider";

    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return context;
}
