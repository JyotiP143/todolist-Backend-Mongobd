import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { addTask, deleteTask, getTasks } from "../services/api";

function Home() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };
useEffect(() => {
  const fetchData = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  fetchData();
}, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager 🚀</h1>

      <TaskForm onAdd={async (title) => {
        await addTask(title);
        loadTasks();
      }} />

      <TaskList
        tasks={tasks}
        onDelete={async (id) => {
          await deleteTask(id);
          loadTasks();
        }}
      />
    </div>
  );
}

export default Home;