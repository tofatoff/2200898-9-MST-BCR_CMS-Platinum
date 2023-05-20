import React from "react";
import { FiHome, FiTruck } from "react-icons/fi";

import styles from "./styles.module.css";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.sidebar}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="/" className={styles["sidebar-item"]}>
              <div className={styles["logo-bcr-sq"]}></div>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={styles["sidebar-item"]}>
              <FiHome className={styles.fi} />
              <h2>Dashboard</h2>
            </a>
          </li>
          <li>
            <a href="#" className={styles["sidebar-item"]}>
              <FiTruck className={styles.fi} />
              <h2>Cars</h2>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
