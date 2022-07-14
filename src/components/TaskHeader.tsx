import React from "react";
import { Task } from "./Task";
import styles from "./TaskHeader.module.css";

type TaskHeaderProps = {
  tasks: Task[];
};

export const TaskHeader: React.FC<TaskHeaderProps> = ({ tasks }) => {
  const getCompletedTasks = () => tasks.filter((task) => task.isCompleted);

  return (
    <div className={styles.tasksHeader}>
      <div>
        Tarefas criadas
        <span className={styles.floatingIcon}>{tasks.length}</span>
      </div>
      <div>
        Concluídas
        <span className={styles.floatingIcon}>
          {getCompletedTasks().length} de {tasks.length}
        </span>
      </div>
    </div>
  );
};
