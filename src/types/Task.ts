export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export type TaskStatus = "Pending" | "In Progress" | "Completed";

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: string;
}

export type TaskState = Task[];

export interface TaskActions {
  addTask: (task: Task) => void;
  updateTask: (task: Partial<Task> & { id: string }) => void;
  deleteTask: (id: string) => void;
}
