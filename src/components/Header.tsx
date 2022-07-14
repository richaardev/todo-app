import React from "react";
import styles from "./Header.module.css";
import Logo from "../assets/Logo.svg";

export const Header: React.FC = () => {
  return (
    <div className={styles.bigBlackBox}>
      <img src={Logo} width="126" />
    </div>
  );
};
