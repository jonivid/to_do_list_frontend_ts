import React from "react";
import { useTaskState } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export const TaskList: React.FC = () => {
  const tasks = useTaskState();

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
