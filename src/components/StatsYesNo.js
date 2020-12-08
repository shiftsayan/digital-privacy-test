import React, { useState } from "react";
import styles from "./StatsYesNo.module.scss";

export default function Statsbar(props) {
  const [activeYes, setActiveYes] = useState(true);
  const [activeNo, setActiveNo] = useState(false);
  return (
    <div className={styles.overallContainer}>
      <h5 className={styles.title}>{props.question}</h5>
      <p className={styles.average}>{props.average} people said yes. </p>
      <p className={styles.user}>You said {props.user}</p>
      <div className={styles.YesNoContainer}>
        <input
          type="button"
          className={(styles.button, activeYes ? styles.active : "")}
          value="Yes"
        />
        <input
          type="button"
          className={(styles.button, activeNo ? styles.active : "")}
          value="No"
        />
      </div>
    </div>
  );
}
