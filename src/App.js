import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import NewTask from "./components/NewTask";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS Fundamental", status: 0 },
    { id: "task_2", title: "Code a Todo list", status: 1 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        console.log("task", task);
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  console.log("tasks", tasks);

  return (
    <div className="container">
      <Header title="Todo List" subtitle="Get this list" />
      <List
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />
      <NewTask
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        newTask={newTask}
      />
    </div>
  );
};

export default App;
