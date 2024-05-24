import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleTaskCreated = (task: any) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDeleted = (id: string) => {
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>Task Scheduler</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} onTaskDeleted={handleTaskDeleted} />
    </div>
  );
};

export default App;
