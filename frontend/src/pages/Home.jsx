
 


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
    <div className="container">
      <h1>Task Manager 🚀</h1>

      <TaskForm
        onAdd={async (title) => {
          await addTask(title);
          loadTasks();
        }}
      />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        refresh={loadTasks}
      />
    </div>
  );
}

export default Home;