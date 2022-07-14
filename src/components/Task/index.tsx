import React from "react";
import CheckMark from "../../assets/CheckMark.svg";
import Trash from "../../assets/trash.svg?component";
import styles from "./Task.module.css";

export type Task = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type TaskProps = {
  text: string;
  isCompleted: boolean;
  onTaskChangeComplete: () => void;
  onTaskDelete: () => void;
};

export const TaskComponent: React.FC<TaskProps> = ({ text, isCompleted, onTaskDelete, onTaskChangeComplete }) => {
  return (
    <div className={isCompleted ? styles.taskCompleted : styles.task}>
      <div className={styles.checkMark} onClick={onTaskChangeComplete}>
        <span>
          <img className={styles.checkMarkImage} src={CheckMark} />
        </span>
      </div>
      <div className={styles.taskText}>{text}</div>
      <div onClick={onTaskDelete}>
        <Trash className={styles.taskTrash} fill="#808080" />
      </div>
    </div>
  );
};
