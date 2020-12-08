import React from "react";
import styles from "./Statsbar.module.scss";

export default function Statsbar(props) {
  // can use {props.your} and {props.mean} to get those values
  return (
    <div className={styles.barContainer}>
      <h5>{props.prompt}</h5>

      <div className={styles.outerBar}>
        <span className={styles.average}>{props.mean_label}</span>
        <span className={styles.innerBar} style={{width: `${props.mean}%`}}>
          <span className={styles.user}>{props.your_label}</span>
        </span>
        <p className={styles.leftTag}>{props.left_tag}</p>
        <p className={styles.rightTag}>{props.right_tag}</p>
      </div>
    </div>
  );
}
