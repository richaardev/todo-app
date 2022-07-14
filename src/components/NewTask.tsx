import React, { useState } from "react";
import Plus from "../assets/plus.svg";
import styles from "./NewTask.module.css";

type NewTaskProps = {
  onSubmitTask: (taskName: string) => void;
};

export const NewTask: React.FC<NewTaskProps> = ({ onSubmitTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const createTask = () => {
    onSubmitTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <div className={styles.newTask}>
      <input
        className={styles.newTaskBox}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewTaskText(e.target.value)}
        value={newTaskText}
      />
      <button className={styles.submitTask} onClick={createTask}>
        Criar
        <img src={Plus} width="16" />
      </button>
    </div>
  );
};
