import React, { useState } from "react";
import axios from "axios";

interface TaskFormProps {
  onTaskCreated: (task: any) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [name, setName] = useState("");
  const [cronExpression, setCronExpression] = useState("");
  const [executeAt, setExecuteAt] = useState("");
  const [recurring, setRecurring] = useState(false);

  const handleCreateTask = () => {
    const newTask = { name, cronExpression, executeAt, recurring };
    axios
      .post("/api/tasks", newTask)
      .then((response) => {
        onTaskCreated(response.data);
        setName("");
        setCronExpression("");
        setExecuteAt("");
        setRecurring(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cron Expression"
        value={cronExpression}
        onChange={(e) => setCronExpression(e.target.value)}
      />
      <input
        type="datetime-local"
        value={executeAt}
        onChange={(e) => setExecuteAt(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={recurring}
          onChange={(e) => setRecurring(e.target.checked)}
        />
        Recurring
      </label>
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
};

export default TaskForm;
