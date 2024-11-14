import React, { useState } from "react";
import { Task, TaskPriority } from "../types/Task";
import { useTaskActions } from "../context/TaskContext";

export const TaskForm: React.FC = () => {
  const { addTask } = useTaskActions();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.Low);

  const handleSubmit = () => {
    if (title.trim()) {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        completed: false,
        priority,
        status: "Pending",
      };
      addTask(newTask);
      setTitle("");
      setPriority(TaskPriority.Low);
    }
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value in TaskPriority) {
      setPriority(value as TaskPriority);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <select value={priority} onChange={handlePriorityChange}>
        <option value={TaskPriority.Low}>Low</option>
        <option value={TaskPriority.Medium}>Medium</option>
        <option value={TaskPriority.High}>High</option>
      </select>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};
