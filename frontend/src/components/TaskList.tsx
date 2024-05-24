import React from "react";
import axios from "axios";

interface TaskListProps {
  tasks: any[];
  onTaskDeleted: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskDeleted }) => {
  const handleDeleteTask = (id: string) => {
    axios
      .delete(`/api/tasks/${id}`)
      .then(() => onTaskDeleted(id))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Scheduled Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.name} -{" "}
            {task.recurring
              ? `Recurring: ${task.cronExpression}`
              : `Execute At: ${task.executeAt}`}
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
