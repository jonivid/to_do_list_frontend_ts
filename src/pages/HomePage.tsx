import React from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

export const HomePage: React.FC = () => {

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};
