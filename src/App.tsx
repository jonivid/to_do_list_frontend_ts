import "./App.css";
import { HomePage } from "./pages/HomePage";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <HomePage />
    </TaskProvider>
  );
}

export default App;
