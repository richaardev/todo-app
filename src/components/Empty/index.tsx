import React from "react";
import Clipboard from "../../assets/Clipboard.svg"
import styles from "./Empty.module.css";

export const Empty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <img className={styles.clipboardImage} src={Clipboard} width="56" />
      <span className={`${styles.text} ${styles.bolder}`}>Você ainda não tem tarefas cadastradas</span>
      <span className={styles.text}>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};
