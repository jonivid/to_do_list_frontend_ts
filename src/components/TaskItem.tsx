import React from "react";
import { Task } from "../types/Task";
import { useTaskActions } from "../context/TaskContext";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask } = useTaskActions();

  const toggleComplete = () => {
    updateTask({ id: task.id, completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span>
        {task.title} - <strong>{task.priority}</strong>
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default React.memo(TaskItem);
