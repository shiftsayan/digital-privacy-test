import React from "react";
import styles from "./Statsbar.module.scss";

export default function Statsbar(props) {
  // can use {props.your} and {props.mean} to get those values
  return (
    <div className={styles.barContainer}>
      <h5>{props.prompt}</h5>

      <div className={styles.outerBar}>
        {props.your && (
          <span className={styles.user} style={{ left: `${props.your}%` }}>
            {props.your_label}
            <div className={`${styles.arrowDown} ${styles.arrowBlack}`}></div>
          </span>
        )}
        <span className={styles.innerBar} style={{ width: `${props.mean}%` }}>
          <span className={styles.average}>
            {props.mean_label}
            <div className={`${styles.arrowDown} ${styles.arrowBlue}`}></div>
          </span>
        </span>

        <p className={styles.leftTag}>{props.left_tag}</p>
        <p className={styles.rightTag}>{props.right_tag}</p>
      </div>
    </div>
  );
}
