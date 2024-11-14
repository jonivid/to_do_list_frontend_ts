import  { createContext, useContext, ReactNode } from "react";
import { useTask } from "../hooks/useTask";
import { TaskState, TaskActions } from "../types/Task";

export const TaskStateContext = createContext<TaskState | null>(null);
export const TaskActionsContext = createContext<TaskActions | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const { tasks, addTask, updateTask, deleteTask } = useTask();

  return (
    <TaskStateContext.Provider value={tasks}>
      <TaskActionsContext.Provider value={{ addTask, updateTask, deleteTask }}>
        {children}
      </TaskActionsContext.Provider>
    </TaskStateContext.Provider>
  );
};

export const useTaskState = () => {
  const context = useContext(TaskStateContext);
  if (!context) {
    throw new Error("useTaskState must be used within a TaskProvider");
  }
  return context;
};

export const useTaskActions = () => {
  const context = useContext(TaskActionsContext);
  if (!context) {
    throw new Error("useTaskActions must be used within a TaskProvider");
  }
  return context;
};
