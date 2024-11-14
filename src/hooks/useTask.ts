import { useCallback, useState } from "react";
import { Task } from "../types/Task";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }, []);

  const updateTask = useCallback(
    (updatedTask: Partial<Task> & { id: string }) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updatedTask } : task,
        ),
      );
    },
    [],
  );

  const deleteTask = useCallback((taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  return { tasks, addTask, updateTask, deleteTask };
};
