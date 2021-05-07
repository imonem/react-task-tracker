import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting with Project React",
      day: "May 11",
      reminder: true,
    },
    {
      id: 2,
      text: "Help me with React My Reads",
      day: "May 11",
      reminder: false,
    },
    {
      id: 3,
      text: "Brad Traversy is actually helping me",
      day: "May 11",
      reminder: true,
    },
    {
      id: 4,
      text: "Submit My Reads before deadline",
      day: "May 11",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
