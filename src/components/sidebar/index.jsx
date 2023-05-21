import React from "react";
import { FiHome, FiTruck, FiMenu } from "react-icons/fi";

import styles from "./styles.module.css";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="/" className={`${styles["sidebar-item"]}`}>
            <div className={styles["logo-bcr-sq"]}></div>
          </a>
        </li>
        <li className="nav-item">
          <a href="/dashboard" className={`${styles["sidebar-item"]} ${props.active === "dashboard" ? styles["sidebar-item-active"] : null} `}>
            <FiHome className={styles.fi} />
            <h2>Dashboard</h2>
          </a>
        </li>
        <li>
          <a href="/cars" className={`${styles["sidebar-item"]} ${props.active === "cars" ? styles["sidebar-item-active"] : null} `}>
            <FiTruck className={styles.fi} />
            <h2>Cars</h2>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
