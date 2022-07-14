import React from "react";
import styles from "./TaskList.module.css";
import { Empty } from "./Empty";
import { Task, TaskComponent } from "./Task";

type TaskListProps = {
  tasks: Task[];

  onDeleteTask: (id: string) => void;
  onChangeTaskComplete: (id: string) => void;
};

export const TaskList: React.FC<TaskListProps> = ({ tasks, onChangeTaskComplete, onDeleteTask }) => {
  return (
    <div className={styles.taskList}>
      {tasks.length < 1 ? (
        <Empty />
      ) : (
        tasks.map(({ id, isCompleted, text }) => (
          <TaskComponent
            key={id}
            onTaskDelete={() => onDeleteTask(id)}
            onTaskChangeComplete={() => onChangeTaskComplete(id)}
            isCompleted={isCompleted}
            text={text}
          />
        ))
      )}
    </div>
  );
};
