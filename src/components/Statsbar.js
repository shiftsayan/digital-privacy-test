import React from "react";
import styles from "./Statsbar.module.scss";

export default function Statsbar(props) {
  return (
    // <div>
    <div className={styles.barContainer}>
      <h5>I am careful with how I share my information online.</h5>

      <div className={styles.outerBar}>
        <span className={styles.average}>average</span>
        <span className={styles.innerBar}>
          <span className={styles.user}>hello</span>
        </span>
        <p className={styles.leftTag}>Strongly Disagree</p>
        <p className={styles.rightTag}>Strongly Agree</p>
      </div>
    </div>
  );
}
