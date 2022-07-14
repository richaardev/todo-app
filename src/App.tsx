import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./app.module.css";
import Logo from "./assets/Logo.svg";
import { NewTask, TaskHeader, TaskList } from "./components/";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const submitTask = (newTaskText: string) => {
    if (newTaskText.trim() === "") return;
    const newTask: Task = {
      id: uuid(),
      isCompleted: false,
      text: newTaskText.trim(),
    };

    setTasks([...tasks, newTask]);
  };

  const changeTaskComplete = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, isCompleted: !task.isCompleted };
        return task;
      }),
    );
  };

  const deleteTask = (id: string) => {
    setTasks([...tasks.filter((task) => task.id != id)]);
  };

  return (
    <div className="App">
      <Header />
      <div className={styles.appContainer}>
        <NewTask onSubmitTask={submitTask} />
        <div className={styles.tasksContainer}>
          <TaskHeader tasks={tasks} />
          <TaskList tasks={tasks} onChangeTaskComplete={changeTaskComplete} onDeleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
